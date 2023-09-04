import express, { Application } from 'express';
import helmet from 'helmet' ;
import morgan from 'morgan';
import logger from './utils/logger/logger';

(()=>{
    const app = express()
    const port = process.env.PORT || 3001 ; 
    
    app.use(express.static('public'))
    app.use(express.urlencoded({extended : true}))
    app.use(express.json())
    app.use(helmet())
    app.use(morgan("tiny"))

    app.get('/' , (req,res)=>{
        res.send('hello world')
    })

    app.listen(port , ()=>{
        console.log(process.version)
        console.log(`app running on port ${port}`)
        logger.info(`app running on port ${port}`)
    })
})()

