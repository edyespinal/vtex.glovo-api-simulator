import { Document, Schema, Model, model } from 'mongoose'
import bcrypt from 'bcrypt'

interface User extends Document {
  email: string
  name: string
  password: string
  access: boolean
  admin: boolean
  createdAt: Date
  updatedAt: Date
}

interface UserModel extends Model<User> {
  validatePassword(): Promise<boolean>
}

const userSchema = new Schema<User>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    name: String,
    password: {
      type: String,
      required: true,
    },
    access: Boolean,
    admin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
)

userSchema.pre('save', async function (next) {
  try {
    if (!this.isModified('password')) {
      return next()
    }

    const hashedPassword = await bcrypt.hash(this.password, 10)
    this.password = hashedPassword

    return next()
  } catch (error) {
    return next(error)
  }
})

userSchema.methods.validatePassword = async function (
  passwordToValidate,
  next
) {
  try {
    const isValid = await bcrypt.compare(passwordToValidate, this.password)

    return isValid
  } catch (error) {
    return next(error)
  }
}

userSchema.methods.validateUser = async function (date, next) {
  try {
    if (this.admin)
      return {
        valid: true,
        expires: null,
      }

    const validUntil = new Date()
    validUntil.setTime(this.createdAt.getTime() + 7 * 24 * 60 * 60 * 1000)

    if (date <= validUntil)
      return {
        valid: true,
        expires: validUntil,
      }

    return { valid: false }
  } catch (error) {
    return next(error)
  }
}

const User = model<User>('User', userSchema)

export default User
