import { ValidationChain, check } from "express-validator";

export function createStockValidation():ValidationChain[]{
    return [
        check('name')
            .notEmpty().withMessage('Name is required')
        ,
        check('symbol')
            .notEmpty().withMessage('Symbol is required')
        ,
        check('price')
            .notEmpty().withMessage('Price is required')
            .isLength({max : 10}).withMessage('The price must be less than 10')
    ]
}