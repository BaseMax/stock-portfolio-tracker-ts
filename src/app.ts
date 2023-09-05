import {config} from 'dotenv';
config()

import './auth/jwt/jwt.strategy';

import express from 'express';
import helmet from 'helmet' ;
import morgan from 'morgan';
import logger from './shared/logger/logger';
import passport from 'passport';
import mainRoutes from './routes';
import { databaseConnection } from './config/database.config';


(()=>{
    const app = express()
    const port = process.env.PORT || 3001 ; 
    
    app.use(express.static('public'));
    app.use(express.urlencoded({extended : true}));
    app.use(express.json());
    app.use(helmet());
    app.use(morgan("tiny"));
    app.use(passport.initialize());
    
    // all routes
    app.use(mainRoutes);

    app.listen(port , ()=>{
        console.log(process.version)
        databaseConnection()
        console.log(`app running on port ${port}`)
        logger.info(`app running on port ${port}`)
    })
})()
