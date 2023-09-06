import {Request , Response} from 'express';
import { Protofilo } from './models/protofilo.model';
import { IUser } from '../user/user.interface';
import { Stock } from '../stock/models/stock.model';


const createProtofilo = async (req:Request,res:Response)=>{
    const {
        name , 
        description , 
    } = req.body;

    const user = req.user as IUser

    const newProtofilo = await Protofilo.create({
        name , 
        description , 
        user : user.id 
    })

    res.status(201).json({
        message : 'Item creatd successfully' , 
        success : true , 
        id : newProtofilo.id
    })
}



const findAllProtofilo = async (req:Request,res:Response)=>{
    const user = req.user as IUser
    const result = await Protofilo.find({user : user.id})
    .populate('user')
    .populate('stocks')
    .exec()

    res.send(result) ; 
}


const addStockToProtofilo = async (req:Request ,res:Response)=>{
    const id = req.params.id ;
    const { stockId } = req.body ; 
    
    // check protofilo exist
    const protofilo = await Protofilo.findById(id);

    if(!protofilo){
        return res.status(404).json({
            message : 'Protofilo not found',
            success: false
        })
    }

    const stock = await Stock.findById(stockId);

    if(!stock){
        return res.status(404).json({
            message : 'Stock not found',
            success: false
        })
    }


    protofilo.stocks.push(stock.id)

    await protofilo.save()

    res.json({
        message : 'Item addedd successfully' ,
        success :true ,
    })
}

const removeStockToProtofilo = async(req:Request ,res:Response)=>{
    const { stockId , id } = req.params ;
    
    // check protofilo exist
    const protofilo = await Protofilo.findById(id);

    if(!protofilo){
        return res.status(404).json({
            message : 'Protofilo not found',
            success: false
        })
    }

    const stock = await Stock.findById(stockId);

    if(!stock){
        return res.status(404).json({
            message : 'Stock not found',
            success: false
        })
    }

    await Protofilo.findOneAndUpdate(protofilo.id , {
        $pull : {stocks : stock.id}
    })

    res.json({
        message : 'Item addedd successfully' ,
        success :true ,
    })
}

export {
    createProtofilo , 
    findAllProtofilo , 
    addStockToProtofilo , 
    removeStockToProtofilo , 
}