import request from 'supertest' ;
import { app, server } from "src/app";
import { databaseConnection } from 'src/config/database.config';
import mongoose from 'mongoose';
import { User } from 'src/user/model/user.model';
import { Protofilo } from 'src/protofilo/models/protofilo.model';



describe('Protofilo tests' ,() => {
    let protofiloId : string ; 
    let token:string;

    beforeAll(async () => {
        const user = await User.create({
            email : 'test@gamil.com',
            firstName : 'test',
            lastName : 'test',
            username : 'test',
            password : 'test',
        });


        const res = await request(app)
            .post('/auth/login')
            .send({
                username : 'test',
                password  : 'test'
            })
        
        token = res.body.access_token ;

        databaseConnection().catch(err=>console.error(err))
    })

    afterAll(async ()=>{
        await User.deleteMany()
        await Protofilo.deleteMany()
        await mongoose.connection.close()
        server.close()
    })


    it('Most be create' , async  ()=>{

        const data = {
            name : 'test' , 
            description : 'test',
        }
        
        const result = await request(app)
            .post('/protofilo/')
            .set('Authorization', `Bearer ${token}`)
            .send(data)

        protofiloId = result.body.id ;
        expect(result.status).toBe(201)
    
    })

    it('Most be get Protofilo' , ()=>{
        return request(app)
        .get(`/protofilo/${protofiloId}`)
        .set('Authorization', `Bearer ${token}`)
        .expect(200)
    })

    it('Most be update protofilo',async () => {
        const data = {
            name : 'test update name' ,
            description : 'test update des'
        }
        
        return request(app)
        .put(`/protofilo/${protofiloId}`)
        .set('Authorization', `Bearer ${token}`)
        .send(data)
        .expect(200)
    })
})