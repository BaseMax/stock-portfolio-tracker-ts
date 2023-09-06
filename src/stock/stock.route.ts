import { Router } from "express";
import { createStock, findStock } from "./stock.controller";
import passport from "passport";
import { createStockValidation } from "./validation/create-stock.validation";
import { validation } from "../shared/errors/validation";

const router = Router()

router.post(
    '/' , 
    passport.authenticate('jwt',{session:false}) ,
    createStockValidation() , 
    validation , 
    createStock);
router.get('/' , passport.authenticate('jwt',{session:false}) ,findStock);


export default router ; 