import { ValidationChain, check } from "express-validator";

const createTransactionValidator = ():ValidationChain[] =>{
    return [
        check('quantity')
            .notEmpty().withMessage('Quantity is reuqired')
            .isInt({max : 20}).withMessage('Quantity is invalid')
        ,
        check('type')
            .notEmpty().withMessage('Type is reuqired')
    ]
}


export {createTransactionValidator};