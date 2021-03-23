import { Router } from "express";
import { ctrl_podcasts_test } from "../controllers";

const router = Router();

router.get('/', ctrl_podcasts_test);

export default router;