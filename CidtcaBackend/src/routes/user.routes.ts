import { Router } from 'express';
import { getUser } from '../controllers/getUser.controller';
import { postUser } from '../controllers/postUser.controller';

const router = Router();

router.get('/user', getUser);
router.post('/user', postUser);

export default router;
