import { Router } from "express";
import { createStock, findStock, findStockById, findStockBySymbol, removeStock } from "./stock.controller";
import passport from "passport";
import { createStockValidation } from "./validation/create-stock.validation";
import { validation } from "../shared/errors/validation";

const router = Router()

router.post(
    '/' , 
    passport.authenticate('jwt',{session:false}) ,
    createStockValidation() , 
    validation , 
    createStock
);

router.get(
    '/' , 
    passport.authenticate('jwt',{session:false}) ,
    findStock
);

router.get(
    '/:id' , 
    passport.authenticate('jwt',{session:false}) ,
    findStockById ,
);

router.get(
    '/symbol/:symbol' , 
    passport.authenticate('jwt',{session:false}) ,
    findStockBySymbol,
);


router.delete(
    '/:id' , 
    passport.authenticate('jwt',{session:false}) , 
    removeStock
)

export default router ; 