import { Router } from 'express';
import controllers from '../controllers';

const router = Router();

router.get('/forms', controllers.getListForms);
router.post('/forms', controllers.createForm);
router.get('/forms/:id', controllers.getForm);
router.patch('/forms/:id', controllers.patchForm);
router.delete('/forms/:id', controllers.deleteForm);
router.get('/user', controllers.getUser);
router.post('/user', controllers.postUser);

export default router;
