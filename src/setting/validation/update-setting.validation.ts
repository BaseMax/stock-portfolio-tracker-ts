import { ValidationChain, check } from "express-validator";

const updateSettingValidation = ():ValidationChain[]=>{
    return [
        check('theme')
            .notEmpty().withMessage('Theme is required')
        ,
        check('currency')
            .notEmpty().withMessage('Currency is required')    
    ]
}


export {updateSettingValidation}