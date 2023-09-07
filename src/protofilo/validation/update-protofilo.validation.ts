import { ValidationChain, check } from "express-validator";


const updateProtofiloValidation = ():ValidationChain[]=>{
    return [
        check('name')
            .notEmpty().withMessage('Name is reuqired')
        ,
        check('description')
            .notEmpty().withMessage('Description is reuqired')
    ]
}

export {updateProtofiloValidation}