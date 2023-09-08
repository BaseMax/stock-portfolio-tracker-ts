import { Request, Response } from "express";
import { IUser } from "../user/user.interface";
import { Setting } from "./models/setting.model";


const createSetting = async (req:Request,res:Response) => {
    const {
        currency , 
        theme , 
    } = req.body
    const user = req.user as IUser ;

    const setting = await Setting.findOne({user : user.id})
        .populate('user')
        .exec()


    if(setting){
        return res.status(400).json({
            message : 'Setting alredy used'
        })
    }


    const newSetting = await Setting.create({
        user : user.id , 
        theme , 
        currency ,
    })


    res.status(201).json({
        message : 'Item created successfully',
        success:true,
        id : newSetting.id , 
    })

}

const getSetting =async (req:Request,res:Response) => {
    const user = req.user as IUser ;

    const setting = await Setting.findOne({user : user.id})
        .populate('user')
        .exec()

    

    res.send(setting)    
}

const updateSetting =async (req:Request,res:Response) => {
    const {
        currency , 
        theme , 
    } = req.body ; 
    const user = req.user as IUser ;
    const setting = await Setting.findOne({user:user.id});
    
    
    if(!setting){
        return res.status(404).json({
            message : 'Item not found' , 
        })
    }


    setting.theme = theme ; 
    setting.currency = currency;

    await setting.save();

    res.send({
        message : 'Item created successfully',
        sucess:true 
    })
}


export {
    getSetting , 
    updateSetting ,
    createSetting 
}