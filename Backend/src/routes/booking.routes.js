import { Router } from "express";

import { makeBooking , togglePaymentStatus } from "../controllers/booking.controller.js";
import verifyJWT from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/").post(verifyJWT, makeBooking);
router.route("/payment").put(verifyJWT, togglePaymentStatus);

export default router;