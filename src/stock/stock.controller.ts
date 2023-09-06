import { Request , Response } from 'express';
import { Stock } from './models/stock.model';
import { IUser } from '../user/user.interface';


const createStock = async(req:Request , res:Response)=>{
    const {
        symbol , 
        name , 
        price ,
    } = req.body ;
    
    const user = req.user as IUser 

    const newStock = await Stock.create({
        symbol , 
        name , 
        price , 
        user : user.id 
    })

    res.status(201).json({
        message : 'Item created successfully' ,
        success : true , 
        id : newStock.id
    })
}


const findStock = async (req:Request , res:Response)=>{
    const user = req.user as IUser ; 
    const result = await Stock.find({user : user.id})
        .populate('user')
        .exec()

    res.json(result)
}


export {
    createStock , 
    findStock 
}