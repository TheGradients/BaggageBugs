import { Router } from 'express';

import {
    registerFacility,
    getFacilities,
    getFacilityById,
    editFacility
} from '../controllers/facility.controller.js';
import verifyJWT from "../middlewares/auth.middleware.js";

const router = Router();

router.route('/register').post(verifyJWT, registerFacility);
router.route('/').get(verifyJWT, getFacilities);
router.route('/get').get(verifyJWT, getFacilityById);
router.route('/edit').put(verifyJWT, editFacility);

export default router;