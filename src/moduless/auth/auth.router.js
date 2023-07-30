import {Router} from 'express'
import * as authController from  './control/auth.js'

const router = Router();
router.post("/signup",authController.signUp)
router.post("/login",authController.logIn)
router.patch("/verifyEmail/:token",authController.verifyMail)
router.patch("/forgetpassword",authController.forgetPassword)


export default  router