import { Router } from "express";
import passport from "passport";
import { me } from "./user.controller";
const router = Router()


router.get('/me' , passport.authenticate('jwt' ,{session:false}) , me);


export default router ; 