import {Request , Response} from 'express';

export function me(req:Request,res:Response){
    res.send("user profile");
}

