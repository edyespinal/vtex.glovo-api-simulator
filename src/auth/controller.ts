import type { Request, Response } from 'express'
import User from './model'
import jwt, { Secret } from 'jsonwebtoken'

export const signin = async (req: Request, res: Response) => {
  try {
    const user: any = await User.findOne({ email: req.body.email })
    const { id, email, admin } = user
    const passwordValid = await user.validatePassword(req.body.password)
    const userValidation = await user.validateUser(new Date())
    const { valid, expires } = userValidation

    if (passwordValid && valid) {
      const token = jwt.sign(
        {
          id,
          email,
          expires,
          admin,
        },
        process.env.SECRET as Secret
      )
      return res.status(200).json({
        id,
        email,
        expires,
        admin,
        token,
      })
    } else {
      return res.status(403).json({
        message: 'Invalid email or password',
      })
    }
  } catch (error) {
    res.status(403).json({ message: 'Invalid email or password' })
  }
}

export const signup = async (req: Request, res: Response, next: any) => {
  try {
    const user = await User.create(req.body)
    const { id, email } = user

    const token = jwt.sign(
      {
        id,
        email,
      },
      process.env.SECRET as Secret
    )
    console.log(token)

    return res.status(201).json({
      id,
      email,
      token,
    })
  } catch (error) {
    if (error.code === 11000) {
      error.message = 'Email is already registered.'
    }
    res.status(400).json(error)
  }
}
