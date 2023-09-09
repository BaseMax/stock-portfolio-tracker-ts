import { app, server } from 'src/app';
import request from 'supertest';
import mongoose from 'mongoose';


describe('Test app' , ()=>{

    afterAll(async()=>{
        server.close()
    })

    it('should be request' , ()=>{
        return request(app)
        .get('/')
        .expect(200)
    })
})