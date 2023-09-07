import { Schema, model } from "mongoose";

interface ISetting {
    user : Schema.Types.ObjectId ,
    currency : string ; 
    theme : string ; 
}

const settingSchema = new Schema<ISetting>({
    user : {
        type : Schema.Types.ObjectId ,
        required : true ,
        ref : 'User'
    } , 
    currency : {
        type : String , 
        required : true , 
    } , 
    theme : {
        type : String , 
        required : true ,
    }
});


export const Setting = model('Setting' , settingSchema);