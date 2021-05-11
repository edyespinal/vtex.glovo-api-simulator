// Mapping file for routes
import { Router } from 'express'
import { authRoutes } from '../auth'
import { asocRoutes } from '../api/asoc'
import { rephonicRoutes } from '../api/rephonic'
import podcastRoutes from './podcasts.routes'

const router = Router()

router.use('/auth', authRoutes)
router.use('/asoc', asocRoutes)
router.use('/api/rephonic', rephonicRoutes)
router.use('/podcasts', podcastRoutes)

export default router
