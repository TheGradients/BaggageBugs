import Router from 'express';
import { createPayment , verifyPayment } from '../controllers/payment.controller.js';
import verifyToken from '../middlewares/auth.middleware.js';

const router = Router();

router.route('/create').post(verifyToken, createPayment);
router.route('/verify').get(verifyToken, verifyPayment);

export default router;