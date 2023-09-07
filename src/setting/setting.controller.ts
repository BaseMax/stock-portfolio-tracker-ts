import { Request, Response } from "express";
import { IUser } from "../user/user.interface";
import { Setting } from "./models/setting.model";

const getSetting =async (req:Request,res:Response) => {
    const user = req.user as IUser ;

    const setting = Setting.findOne({user : user.id})
        .populate('user')
        .exec()

    

    res.send(setting)
    
}

const updateSetting =async (req:Request,res:Response) => {

}