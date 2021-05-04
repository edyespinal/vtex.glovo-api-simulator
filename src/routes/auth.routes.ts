import { Router } from 'express'
import { authRoutes } from '../api/auth'

const router = Router()

router.use('/auth', authRoutes)

export default router
