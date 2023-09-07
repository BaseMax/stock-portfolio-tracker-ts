import { Router } from "express";
import { 
    addStockToProtofilo, 
    createProtofilo ,
    findAllProtofilo, 
    findOneProtofilo, 
    removeProtofilo, 
    removeStockToProtofilo, 
    updateProtofilo 
} from "./protofilo.controller";
import passport from "passport";
import { createProtofiloValidation } from "./validation/create-protofilo.validation";
import { validation } from "../shared/errors/validation";
import { addStockValidation } from "./validation/add-stock.validation";
import { updateProtofiloValidation } from "./validation/update-protofilo.validation";

const router = Router();

router.post(
    '/' , 
    passport.authenticate('jwt' , {session:false}),
    createProtofiloValidation() , 
    validation ,
    createProtofilo
)


router.put(
    '/:id/' , 
    passport.authenticate('jwt' , {session:false}),
    updateProtofiloValidation(),
    validation , 
    updateProtofilo ,
)


router.delete(
    '/:id/' , 
    passport.authenticate('jwt' , {session:false}),
    removeProtofilo ,
)


router.get(
    '/' ,
    passport.authenticate('jwt' , {session:false}),
    findAllProtofilo ,
)

router.get(
    '/:id' ,
    passport.authenticate('jwt' , {session:false}),
    findOneProtofilo ,
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