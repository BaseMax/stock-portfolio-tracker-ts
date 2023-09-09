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

const app = express()
const port = process.env.PORT || 3001 ; 

app.use(express.static('public'));
app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.use(helmet());
app.use(morgan("tiny"));
app.use(passport.initialize());

app.get('/' , (req,res)=>{res.sendStatus(200)})

// all routes
app.use(mainRoutes);

const server = app.listen(port , ()=>{
    console.log(process.version)
    console.log(`app running on port ${port}`)
    logger.info(`app running on port ${port}`)
    databaseConnection()
}) 


export {app , server}