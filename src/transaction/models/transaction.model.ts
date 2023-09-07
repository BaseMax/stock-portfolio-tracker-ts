import { Schema, model } from "mongoose";
import { TransactionStatusEnum } from "../enums/transaction-status.enum";

interface ITransaction { 
    _id : Schema.Types.ObjectId ;
    user : Schema.Types.ObjectId ;
    stock : Schema.Types.ObjectId ;
    type : string ;
    quantity : number ; 
    amount : number ;
    status : TransactionStatusEnum
}


const transactionSchema = new Schema<ITransaction>({
    user : {
        type : Schema.Types.ObjectId , 
        required : true , 
        ref : 'User'
    } , 
    stock : {
        type : Schema.Types.ObjectId , 
        required : true , 
        ref : 'Stock'
    } ,
    type : {
        type: String , 
        required : true , 
    } , 
    quantity : { 
        type : Number , 
        required : true ,
    } , 
    amount : {
        type : Number , 
        required : true 
    } , 
    status : {
        enum : TransactionStatusEnum , 
        type : String,
        required : true , 
    }
},{timestamps:true});


export const Transaction = model<ITransaction>('Transaction' , transactionSchema);