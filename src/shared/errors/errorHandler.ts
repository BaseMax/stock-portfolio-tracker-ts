import { Request , Response , NextFunction , ErrorRequestHandler} from 'express';
import logger from '../logger/logger';
import mongoose from 'mongoose';

const errorHandler = (err:Error, req:Request,res:Response,next:NextFunction)=>{

}


export {errorHandler}