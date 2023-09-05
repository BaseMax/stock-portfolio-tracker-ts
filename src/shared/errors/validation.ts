import {
    Request ,
    Response , 
    NextFunction
} from 'express';
import { validationResult } from 'express-validator';

export function validate(req:Request,res:Response):boolean{
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        res.status(400).json({
            message : 'validation error',
            errors : errors.array().map((e)=>e.msg)
        })
        return false 
    }

    return true ;
}


export function validation(req:Request,res:Response,next:NextFunction){
    if(!validate(req,res)){
        return ;
    }

    return next()
}