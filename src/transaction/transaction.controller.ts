import { Request , Response } from 'express';
import { Stock } from '../stock/models/stock.model';
import { Transaction } from './models/transaction.model';
import { IUser } from '../user/user.interface';
import { TransactionStatusEnum } from './enums/transaction-status.enum';

const createTransaction =async (req:Request,res:Response) => {
    const user = req.user as  IUser ; 
    const stockId = req.params.stockId ;
    const {
        quantity , 
        type , 
    } = req.body ;

    const stock = await Stock.findOne({_id:stockId});

    if(!stock){
        return res.status(404).json({
            message : 'Stock not found' ,
            success : false ,
        })
    }

    const amount = quantity * stock.price ; 

    const newTransaction = await Transaction.create({
        type , 
        amount , 
        quantity ,
        user : user.id , 
        stock : stock.id , 
        status : TransactionStatusEnum.PENDING ,
    })

    const result = await newTransaction.save()

    res.status(201).json({
        message : 'Item created successfully',
        success:true,
        id:result.id ,
    })
}


const buyTransaction = async (req:Request,res:Response) => {
    // This controller is the face for change data 
    // if you want use payment gateway make this controller 

    const user = req.user as IUser ; 
    const id = req.params.id ;


    const query = {
        _id : id , 
        user : user.id ,
    }

    const transaction = await Transaction.findOne(query)
        .populate('user')
        .populate('stock')
        .exec()

    
    if(!transaction){
        return res.status(404)
            .json({
                message : 'Transaction not found' ,
                success : false,
            })
    }


    transaction.status = TransactionStatusEnum.SUCCESS ;
    await transaction.save();

    res.send({
        message : 'success',
    })
}


const removeTransaction = async (req:Request,res:Response) => {
    const user = req.user as IUser ; 
    const id = req.params.id ;


    const query = {
        _id : id , 
        user : user.id ,
    }

    const transaction = await Transaction.findOne(query)
        .populate('user')
        .populate('stock')
        .exec()

    
    if(!transaction){
        return res.status(404)
            .json({
                message : 'Transaction not found' ,
                success : false,
            })
    }


    await Transaction.deleteOne(query);
    
    res.send({
        message : 'Transaction removed successfully',
        success: true
    })
}


const findOneTransaction = async (req:Request,res:Response) => {
    const user = req.user as IUser ; 
    const id = req.params.id ;


    const query = {
        _id : id , 
        user : user.id ,
    }

    const transaction = await Transaction.findOne(query)
        .populate('user')
        .populate('stock')
        .exec()


    res.send(transaction);
}


const findAllTransaction = async (req:Request,res:Response) => {
    const user = req.user as IUser ; 
    const transactions = await Transaction.find({user : user.id })
        .populate('user')
        .populate('stock')
        .exec()

    res.send(transactions)
}


export {  
    createTransaction , 
    removeTransaction , 
    buyTransaction ,
    findOneTransaction , 
    findAllTransaction
}