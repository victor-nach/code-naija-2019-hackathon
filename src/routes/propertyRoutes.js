import { Router } from 'express';
import { PropertyController } from '../controller';

const router = new  Router();

router.get('/properties', PropertyController.renderPropertiesPage);

export default router;