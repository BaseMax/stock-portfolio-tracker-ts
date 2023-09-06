import { Document, Schema, Types, model } from "mongoose";


interface IProtofilo extends Document {
    user : Schema.Types.ObjectId; 
    name : string ;
    description : string ; 
    stocks : Schema.Types.ObjectId[]
}

const protofiloSchema = new Schema<IProtofilo>({
    name : {
        type : String , 
        required :  true , 
    } , 
    description : {
        type : String , 
        required : true 
    } , 
    user : {
        type : Schema.Types.ObjectId ,
        ref : 'User' ,
        required : true , 
    } , 
    stocks : [{
        type : Schema.Types.ObjectId , 
        ref : 'Stock' , 
        required : true ,
    }]
},{timestamps : true});



export const Protofilo = model<IProtofilo>('Protofilo' , protofiloSchema)