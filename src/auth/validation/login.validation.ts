import { ValidationChain, check } from "express-validator";

export function loginValidation():ValidationChain[]{
    return [
        check('username')
            .notEmpty().withMessage('Username is required')
            .isString().withMessage('Username should be string')
        ,
        check('password')
            .notEmpty().withMessage('Password is required')
    ]
}