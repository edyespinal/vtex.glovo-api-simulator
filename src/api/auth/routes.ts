import { Router, Request, Response } from 'express'
import { signin, signup } from './controller'

const router = Router()

router.get('/check', (req: Request, res: Response) => res.send('Auth'))
router.post('/signin', signin)
router.post('/signup', signup)

export default router
