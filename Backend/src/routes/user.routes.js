import { Router } from 'express';

import {
    login,
    logout,
    register,
    addDetails,
    changePassword,
    getUser,
    toggleEmail,
    googleCallback,
    setCookies,
    forgotPasswordEmail,
    forgotPasswordVerifyOTP,
    forgotPassword
} from '../controllers/user.controller.js';
import verifyJWT from "../middlewares/auth.middleware.js";
import googleAuth from "../middlewares/googleAuth.middleware.js"
import passport from "../libs/passport.libs.js";

const router = Router();

router.route('/register').post(register);
router.route('/login').post(login); 
router.route('/auth/google').get(passport.authenticate('google', {
    scope: ['profile', 'email'],
    prompt: 'select_account',
}));
router.route('/auth/google/callback').get(passport.authenticate('google', {
    failureRedirect: `${process.env.CLIENT_URL}`,
}), googleAuth, googleCallback);
router.route('/setCookies').post(setCookies);
router.route('/forgotPasswordEmail').post(forgotPasswordEmail);
router.route('/forgotPasswordVerifyOTP').post(forgotPasswordVerifyOTP);
router.route('/forgotPassword').post(forgotPassword);

router.route('/logout').post(verifyJWT, logout);
router.route('/addDetails').post(verifyJWT, addDetails);
router.route('/changePassword').post(verifyJWT, changePassword);
router.route('/getUser').get(verifyJWT, getUser);
router.route('/toggleEmail').post(verifyJWT, toggleEmail);

export default router;