import { Router } from "express";
import { ctrl_podcasts_test } from "../controllers";
import { rephonicRoutes } from '../api'

const router = Router();

router.get('/', ctrl_podcasts_test);
router.use('/rephonic', rephonicRoutes)

export default router;