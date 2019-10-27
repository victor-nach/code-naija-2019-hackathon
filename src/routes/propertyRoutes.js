import { Router } from 'express';
import { PropertyController } from '../controller';

const router = new  Router();

router.get('/add-property', PropertyController.renderAddPropertyPage);
router.get('/properties', PropertyController.renderPropertiesPage);
router.get('/properties/:id', PropertyController.renderSinglePropertiesPage);

export default router;