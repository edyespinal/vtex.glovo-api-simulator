import { Router } from 'express'
import { authRoutes } from '../auth'

const router = Router()

router.get('/', (req, res, next) => res.send('Auth route'))
router.use('/auth', authRoutes)

export default router
