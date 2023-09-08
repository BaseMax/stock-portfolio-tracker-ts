import { Router } from "express";
import passport from "passport";
import { createSetting, getSetting, updateSetting } from "./setting.controller";
import { validation } from "../shared/errors/validation";
import { updateSettingValidation } from "./validation/update-setting.validation";
import { createSettingValidation } from "./validation/create-setting.validation";

const router = Router();

router.get(
    '/' , 
    passport.authenticate('jwt',{session :false}) ,
    getSetting ,
)

router.put(
    '/' ,
    passport.authenticate('jwt' , {session:false}) , 
    updateSettingValidation() , 
    validation ,
    updateSetting ,
)


router.post(
    '/' ,
    passport.authenticate('jwt' , {session:false}) , 
    createSettingValidation() , 
    validation ,
    createSetting ,
)

export default router ; 