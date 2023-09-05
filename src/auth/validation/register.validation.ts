import { ValidationChain, check } from "express-validator";

export function registerValdaition():ValidationChain[]{
    return [
        check('firstName')
            .notEmpty().withMessage('First name is required')
        ,
        check('lastName')
            .notEmpty().withMessage('Last name is required')
        ,
        check('email')
            .notEmpty().withMessage('First name is required')
            .isEmail().withMessage('Email is invalid')
        ,
        check('username')
            .notEmpty().withMessage('Username is required')
        , 
        check('password')
            .notEmpty().withMessage('Password is required')
    ]       
}