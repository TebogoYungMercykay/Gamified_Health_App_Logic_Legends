import supertest from "supertest";
import { app, server } from '../../index.js';
import { users } from "../../Fixtures/usersFixtures.js";
import userModel from "../../Models/userModel.js";
import mongoose from "mongoose";


describe('Test the user auth routes', () => { 
    afterAll(async () => {
        await userModel.deleteMany({});
        await mongoose.connection.close();
        server.close();
    }, 10000);

    
    describe('Registration', () => { 
        test('should register a new user', async () => { 
            const response = await supertest(app).post('/api/auth/register').send(users[0]);
            expect(response.status).toBe(201);
        }, 10000);

        test('should response with 400 status if request body properties is incorrect', async () => { 
            const response = await supertest(app).post('/api/auth/register').send(users[3]);
            expect(response.status).toBe(400);
        }, 10000);

        test('should response with 409 status if email or username already in the database', async () => { 
            const response = await supertest(app).post('/api/auth/register').send(users[0]);
            expect(response.status).toBe(409);
        }, 10000);

    });

    describe('Login', () => { 
        test('It should log in an existing user', async () => { 
            const response = await supertest(app).post('/api/auth/login').send(users[0]);
            expect(response.status).toBe(200);
        }, 10000);

        test('should response with 401 status if email is incorrect', async () => { 
            const response = await supertest(app).post('/api/auth/login').send(users[1]);
            expect(response.status).toBe(401);
        });

        test('should response with 401 status if Password is incorrect', async () => { 
            const response = await supertest(app).post('/api/auth/login').send(users[4]);
            expect(response.status).toBe(401);
        });
    });
    

});