import mongoose from "mongoose";

export async function databaseConnection(){
    mongoose.connect(process.env.MONGODB_URI)
    .then(()=>{
        console.log('connect to database')
    })
    .catch((err)=>{
        console.log(err)
    })
}