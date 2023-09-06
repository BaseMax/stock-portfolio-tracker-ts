import { Router } from "express";
import userRouter from './user/user.route';
import authRouter from './auth/auth.route';
import protofiloRouter from './protofilo/protofilo.route';
import stockRouter from './stock/stock.route';
const router = Router()

router.use('/user' , userRouter);
router.use('/auth',authRouter);
router.use('/protofilo',protofiloRouter);
router.use('/stock' , stockRouter);

export default router ; 