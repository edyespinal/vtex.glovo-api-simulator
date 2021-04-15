// Mapping file for routes
import { Router } from 'express';
import { asocRoutes } from '../api/asoc';
import podcastRoutes from './podcasts.routes';

const router = Router();

router.use('/asoc', asocRoutes);
router.use('/rephonic', podcastRoutes);

export default router;