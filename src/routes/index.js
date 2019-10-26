import { Router } from 'express';
import propertyRoutes from './propertyRoutes';
import userRoutes from './userRoutes';

const router = new  Router();

// router.use(userRoutes);
router.use(propertyRoutes);

export default router;
