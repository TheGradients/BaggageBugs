import { Router } from "express";

import { makeBooking , togglePaymentStatus , getReservations , getParticularReservation} from "../controllers/booking.controller.js";
import verifyJWT from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/").post(verifyJWT, makeBooking);
router.route("/payment").put(verifyJWT, togglePaymentStatus);
router.route("/reservations").get(verifyJWT, getReservations);
router.route("/userReserv").get(verifyJWT, getParticularReservation);
export default router;