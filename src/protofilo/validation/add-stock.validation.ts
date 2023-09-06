import { ValidationChain, check } from "express-validator";

const addStockValidation = ():ValidationChain[]=>{
    return [
        check('stockId')
            .notEmpty().withMessage('Stock ID is required')
    ]
}

export {addStockValidation}