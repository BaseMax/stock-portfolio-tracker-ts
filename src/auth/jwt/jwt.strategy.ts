import passport from "passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { User } from "../../user/model/user.model";

const jwtOpt = {
    jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken() , 
    secretOrKey : process.env.JWT_SECRET_KEY as string 
}

passport.use(new Strategy(jwtOpt , async (payload , done)=>{
    const user = await User.findById(payload.sub);

    if(!user){
        return done(new Error('token is invalid') , false);
    }

    return done(null , user);
}))