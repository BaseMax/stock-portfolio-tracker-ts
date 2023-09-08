import { ValidationChain, check } from "express-validator";

const createSettingValidation = ():ValidationChain[]=>{
    return [
        check('theme')
            .notEmpty().withMessage('Theme is required')
        ,
        check('currency')
            .notEmpty().withMessage('Currency is required')    
    ]
}

export {createSettingValidation}