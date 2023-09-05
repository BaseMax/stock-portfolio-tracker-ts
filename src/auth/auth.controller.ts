import { compareSync } from 'bcrypt';
import { Request , Response } from 'express';
import { User } from '../user/model/user.model';
import { JwtPayload } from './jwt/jwt.payload';
import { sign } from 'jsonwebtoken';


function _signToken(payload:JwtPayload):string{
    return sign(
        payload , 
        process.env.JWT_SECRET_KEY ,
        {
            expiresIn : process.env.JWT_EXPIRE_TIME,
        }
    )
}


export async function login(req:Request , res:Response){
    const {
        username , 
        password ,
    } = req.body ;

    const user = await User.findOne({username});

    if(!user){
        return res.status(400).json({
            message : 'Username is invalid' , 
            success : false ,
        })
    }

    const isValidPassword = compareSync(password , user.password);

    if(!isValidPassword){
        return res.status(400).json({
            message : 'Password is invalid' , 
            success : false ,
        })
    }

    const payload:JwtPayload = {
        sub : user.id 
    }

    res.json({
        access_token : _signToken(payload) , 
        message : 'successfully'
    })
}

export async function register(req:Request,res:Response){
    const {
        firstName , 
        lastName , 
        email , 
        username , 
        password , 
    } = req.body ; 

    const emailInDb = await User.findOne({email})
    const usernameInDb = await User.findOne({username})

    if(emailInDb){
        return res.status(400).json({
            message : 'This email alredy registerd',
            success : false 
        })
    }

    if(usernameInDb){
        return res.status(400).json({
            message : 'This username alredy registerd',
            success : false 
        })
    }

    
    const newUser = await User.create({
        username , 
        password , 
        email , 
        firstName , 
        lastName ,
    })

    const payload:JwtPayload = {
        sub : newUser.id 
    }

    res.json({
        access_token : _signToken(payload) , 
        message : 'Successfully'
    })
}