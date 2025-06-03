import { Router } from 'express';

import {
    registerFacility,
    getFacilities
} from '../controllers/facility.controller.js';
import verifyJWT from "../middlewares/auth.middleware.js";

const router = Router();

router.route('/register').post(verifyJWT, registerFacility);
router.route('/').get(verifyJWT, getFacilities);
router.route('/edit').put(verifyJWT, registerFacility);

export default router;