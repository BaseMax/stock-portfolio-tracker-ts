import { Router } from "express";
import { login, register } from "./auth.controller";
import { registerValdaition } from "./validation/register.validation";
import { validation } from "../shared/errors/validation";
import { loginValidation } from "./validation/login.validation";

const router = Router()


router.post(
    '/register' , 
    registerValdaition() , 
    validation ,
    register
)

router.post(
    '/login' , 
    loginValidation() , 
    validation , 
    login
)

export default router ; 