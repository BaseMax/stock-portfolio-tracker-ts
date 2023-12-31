import { genSalt, genSaltSync, hashSync } from 'bcrypt';
import { Timestamp } from 'bson';
import { Model, Schema, Types, model } from 'mongoose';

interface IUser{
    username : string ;
    password : string ; 
    email : string ; 
    firstName : string ; 
    lastName : string ;
    createdAt: Date;
    updatedAt: Date;
}

const userSchema = new Schema<IUser>({
    username : {
        type : String , 
        required : true , 
        unique : true , 
    } , 
    password : {
        type : String , 
        required : true , 
    } , 
    firstName : {
        type : String ,
        required : true ,
    } , 
    lastName : {
        type : String , 
        required : true ,
    } , 
},{timestamps : true})


userSchema.pre('save' , async function(next){
    const user = this ; 

    if(!user.isModified('password')) return next()

    try {
        const salt = genSaltSync(12);
        const hash = hashSync(user.password , salt);

        user.password = hash ; 
        next()
    } catch (error) {
        next(error)
    }
})

const User = model<IUser>('User' , userSchema);


export {User}
