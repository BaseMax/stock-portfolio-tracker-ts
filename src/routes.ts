import { Router } from "express";
import userRouter from './user/user.route';
import authRouter from './auth/auth.route';
const router = Router()

router.use('/user' , userRouter);
router.use('/auth',authRouter);


export default router ; 