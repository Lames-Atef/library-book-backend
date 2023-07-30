import {Router} from 'express'
import * as userControl from "./control/user.js"
import validationSchema from "../../middelware/validation.js"
import auth from "../../middelware/middleware.auth.js"
import * as validator from "./user.validation.js"
const router = Router();
router.get("/profile",userControl.profileUser)
router.patch("/",auth,userControl.updatePassword)





export default  router