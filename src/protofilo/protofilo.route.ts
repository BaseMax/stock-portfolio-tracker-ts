import { Router } from "express";
import { addStockToProtofilo, createProtofilo ,findAllProtofilo, removeStockToProtofilo } from "./protofilo.controller";
import passport from "passport";
import { createProtofiloValidation } from "./validation/create-protofilo.validation";
import { validation } from "../shared/errors/validation";
import { addStockValidation } from "./validation/add-stock.validation";

const router = Router();

router.post(
    '/' , 
    passport.authenticate('jwt' , {session:false}),
    createProtofiloValidation() , 
    validation ,
    createProtofilo
)


router.get(
    '/' ,
    passport.authenticate('jwt' , {session:false}),
    findAllProtofilo ,
)


router.put(
    '/:id/stock' , 
    passport.authenticate('jwt' , {session:false}),
    addStockValidation(),
    validation , 
    addStockToProtofilo ,
)

router.delete(
    '/:id/stock/:stockId' , 
    passport.authenticate('jwt' , {session:false}),
    removeStockToProtofilo ,
)

export default router ; 