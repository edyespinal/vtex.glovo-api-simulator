import { Router } from 'express'
import { signin, signup } from './controller'

const router = Router()

router.get('/check', (req, res) => res.send('Auth'))
router.post('/signin', signin)
router.post('/signup', signup)

export default router
