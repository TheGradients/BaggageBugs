import {Router} from 'express';
import {auth} from 'express-openid-connect';
import { login, logout, register ,addDetails } from '../controllers/user.controllers.js';
import verifyJWT from "../middlewares/auth.middleware.js";

const router = Router();

router.route('/register').post(register);
router.route('/login').post(login);
router.route('/logout').post(verifyJWT,logout);
router.route('/addDetails').post(verifyJWT,addDetails);

export default router;