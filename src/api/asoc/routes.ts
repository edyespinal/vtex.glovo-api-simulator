import { Router } from 'express'
import { feedDb, findAll } from './controller'
import { signin, signup } from '../../auth/controller'

const router = Router()

router.get('/feed', feedDb)
router.get('/', findAll)
router.post('/signin', signin)
router.post('/signup', signup)

export default router
