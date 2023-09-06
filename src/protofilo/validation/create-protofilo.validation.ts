import { ValidationChain, check } from "express-validator";

export function createProtofiloValidation():ValidationChain[]{
    return [
        check('name')   
            .notEmpty().withMessage('Name is required')
        , 
        check('description')
            .notEmpty().withMessage('Description is required')
    ]
}