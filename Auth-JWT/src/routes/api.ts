import { Router } from 'express';
import * as ApiController from '../controllers/apiController';
import { sendEmail } from '../controllers/emailController';
import { privateRoute } from '../config/passport';

const router = Router();

router.post('/register', ApiController.register);
router.post('/login', ApiController.login);
router.post('/email', sendEmail)
router.get('/list', privateRoute, ApiController.list);

export default router;