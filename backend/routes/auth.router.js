


import authController from "../controllers/auth.controller.js";
import { Router } from "express";
    
const router = Router();

router.route('/register').post(()=>authController.registerUser)
router.route('/login').post(()=>authController.loginUser)


export default router;



