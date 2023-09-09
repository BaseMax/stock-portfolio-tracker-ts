import request from 'supertest' ;
import { app, server } from "src/app";
import { databaseConnection } from 'src/config/database.config';
import mongoose from 'mongoose';
import { User } from 'src/user/model/user.model';

describe('Auth test' ,() => {
    beforeAll(async () => {
        databaseConnection().catch(err=>console.error(err))
        
        const newUser = await User.create({
            firstName : 'test',
            lastName : 'test' , 
            email : 'test@gmail.com',
            username : 'test',
            password : 'test'
        })

        await newUser.save()
    })

    afterAll(async ()=>{
        await User.deleteMany()
        await mongoose.connection.close()
        server.close()
    })


    it('Most be register' , ()=>{
        const data = {
            firstName : 'mamad' , 
            lastName : 'mirzaei' , 
            email : `${Math.random()}mamad@gmail.com`,
            password : '123456',
            username : `${Math.random()}mamad`
        }

        return request(app)
            .post('/auth/register')
            .send(data)
            .expect(200)
    })

    it('Most be login' , ()=>{
        const data = {
            password : 'test' ,
            username : 'test'
        }


        return request(app)
        .post('/auth/login')
        .send(data)
        .expect(200)
    })
})