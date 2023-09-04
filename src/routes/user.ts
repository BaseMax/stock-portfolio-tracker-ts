import { Router } from "express";
import { me } from "../controllers/userController";
const router = Router();


router.get('/me' , me);


export default router ; 