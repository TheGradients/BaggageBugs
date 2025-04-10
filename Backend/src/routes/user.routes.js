import {Router} from 'express';
<<<<<<< HEAD
import { login, logout, register ,addDetails } from '../controllers/user.controllers.js';
=======
import {auth} from 'express-openid-connect';
import { login, logout, register ,addDetails , changePassword , getUser} from '../controllers/user.controllers.js';
>>>>>>> 0e4eb403082978df9c5eae7b1425d64cbfb3b1ce
import verifyJWT from "../middlewares/auth.middleware.js";

const router = Router();

router.route('/register').post(register);
router.route('/login').post(login);
router.route('/logout').post(verifyJWT,logout);
router.route('/addDetails').post(verifyJWT,addDetails);
router.route('/changePassword').post(verifyJWT,changePassword);
router.route('/getUser').get(verifyJWT,getUser);

export default router;