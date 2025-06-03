import Router from 'express';
import { createReview , getReviews} from '../controllers/review.controller.js';
import verifyJWT from "../middlewares/auth.middleware.js";


const router = Router();

router.route('/create').post(verifyJWT, createReview);
router.route('/').get(getReviews);

export default router;