import { Router } from 'express';
import { PropertyController } from '../controller';

const router = new  Router();

router.get('/contact', PropertyController.ren);
router.get('/properties', PropertyController.renderPropertiesPage);
router.get('/properties/:id', PropertyController.renderSinglePropertiesPage);

export default router;