import { Router } from 'express';
import { feedDb, findAll } from './controller';

const router = Router();

router.get('/feed', feedDb);
router.get('/', findAll);

export default router;