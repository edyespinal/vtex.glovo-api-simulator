import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import helmet from 'helmet'
import routes from './routes'

const app = express()

// Middlewares
app.use(morgan('dev'))
app.use(cors())
app.use(helmet())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// Routes
app.use(routes)

app.listen(process.env.PORT, () => {
  console.log(`Server running on ${process.env.PORT}`)
})
