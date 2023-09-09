import { Router } from "express";
import passport from "passport";
import { createTransactionValidator } from "./validator/transaction.validator";
import { validation } from "../shared/errors/validation";
import { 
    buyTransaction, 
    createTransaction, 
    findAllTransaction, 
    findOneTransaction, 
    removeTransaction
} from "./transaction.controller";

const router = Router();

router.post(
    '/:stockId',
    passport.authenticate('jwt' , {session:false}),
    createTransactionValidator() , 
    validation , 
    createTransaction
)



router.put(
    '/:id/buy',
    passport.authenticate('jwt' , {session:false}), 
    buyTransaction , 
)


router.get(
    '/:id',
    passport.authenticate('jwt' , {session:false}), 
    findOneTransaction , 
)


router.get(
    '/',
    passport.authenticate('jwt' , {session:false}), 
    findAllTransaction ,
)


router.delete(
    '/:id',
    passport.authenticate('jwt' , {session:false}), 
    removeTransaction ,
)




export default router ; 