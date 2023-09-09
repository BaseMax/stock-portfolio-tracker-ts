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

    res.send(result)
}


const findStockBySymbol = async (req:Request , res:Response) => {
    const symbol = req.params.symbol ; 

    const result = await Stock.find({symbol})

    res.send(result);
}


const serachStockByName =async (req:Request , res:Response) => {
    const name = req.params.name;
    
    const stock = await Stock.find({name})
        .populate('user')
        .exec()
    
    res.send(stock);
}


const findStockById = async (req:Request , res:Response)=>{
    const id = req.params.id;
    const user = req.user as IUser ; 
    
    const result = await Stock.findOne({
        _id : id , 
        user : user.id , 
    })
    .populate('user')
    .exec()


    if(!result){
        return res.status(404).json({
            message : 'Stock not found' , 
            success : false 
        })
    }

    res.json(result)
}


const removeStock = async (req:Request , res:Response) => {
    const id = req.params.id ; 
    const user = req.user as IUser
    
    const stock = await Stock.findOne({
        _id: id , 
        user : user.id ,
    });

    if(!stock){
        return res.status(404).json({message : 'Stock not found'})
    }

    await Stock.findOneAndRemove(stock.id);

    res.json({
        message : "Item removed successfully" , 
        sucess : true ,
    })
}

export {
    findStock ,
    findStockById ,
    findStockBySymbol , 
    createStock , 
    removeStock ,
    serachStockByName ,
}