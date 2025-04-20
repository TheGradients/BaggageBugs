import { Router } from 'express';

import {
    getFacilities,
    getFacilitiesTimeAndDistance,
} from "../controllers/map.controller.js";

const router = Router();

router.post("/facilitiesBySearch", getFacilities);
router.post("/facilitiesDistanceTime", getFacilitiesTimeAndDistance);

export default router;