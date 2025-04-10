import {Router} from 'express';
import verifyJWT from "../middlewares/auth.middleware.js";
import { registerFacility , getFacilities} from '../controllers/partner.controller.js';

const router = Router();

router.route('/register').post(verifyJWT, registerFacility);
router.route('/').get(verifyJWT, getFacilities);

export default router;