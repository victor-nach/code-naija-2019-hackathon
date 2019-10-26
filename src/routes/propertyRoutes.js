import { Router } from 'express';
import { CompanyController } from '../controller';

const router = new  Router();

router.get('/contact', CompanyController.renderContactPage);

export default router;