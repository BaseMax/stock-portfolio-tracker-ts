import { Schema, model } from "mongoose";

interface IStock {
    symbol : string ; 
    name : string  ; 
    price : number ; 
    user : Schema.Types.ObjectId ,
}

const stockSchema = new Schema<IStock>({
    user : {
        type : Schema.Types.ObjectId , 
        ref : 'User' , 
        required : true 
    } ,
    symbol : {
        type : String , 
        required : true , 
    } , 
    name : {
        type : String ,
        required : true ,
    } , 
    price : {
        type : Number , 
        required : true ,
    }
} , {timestamps : true})


export const Stock = model<IStock>('Stock' , stockSchema);