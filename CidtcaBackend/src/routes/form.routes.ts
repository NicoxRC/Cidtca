import { Router } from 'express';
import { getForm } from '../controllers/getForm.controller';
import { getForms } from '../controllers/getForms.controller';
import { createForm } from '../controllers/createForm.controller';
import { patchForms } from '../controllers/patchForm.controller';
import { deleteForm } from '../controllers/deleteForm.controller';

const router = Router();

router.get('/forms', getForms);
router.post('/forms', createForm);
router.get('/forms/:id', getForm);
router.patch('/forms/:id', patchForms);
router.delete('/forms/:id', deleteForm);

export default router;
