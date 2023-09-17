import mongoose from "mongoose";
import UserRepository from "../../Repository/userRepository.js";
import userModel from "../../Models/userModel.js";
import UserService from "../../Services/userService.js";
import dotenv from 'dotenv';
import { _id, incorrectLength_id,users } from "../../Fixtures/usersFixtures.js";

dotenv.config();


describe('UserService', () => { 
    let userRepository ;
    let userService;

    beforeEach(async () => {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        userRepository = new UserRepository({ userModel: userModel });
        userService = new UserService({ userRepository });
    });

    afterAll(async () => {
        await mongoose.connection.close();
    }, 10000);

    afterEach(async () => {
        await userModel.deleteMany({});
    });

    describe('createUser', () => { 
        
        it('should create a new user', async () => { 
            const userId = await userService.createUser(users[0].name, users[0].email, users[0].password);
            expect(userId).toBeDefined();
        });

        it('should throw a 409 error if email already exists', async () => { 
            await userService.createUser(users[0].name, users[0].email, users[0].password);
            const error = new Error('Email already exists');
            error.statusCode = 409;
            await expect(userService.createUser(users[0].name, users[0].email, users[0].password)).rejects.toThrowError(error);
        });

        it('should throw a 500 error if an unexpected error occurs', async () => { 
            
            const error = new Error('Internal server error.');
            error.statusCode = 500;
            await expect(userService.createUser('', '', '')).rejects.toThrowError(error);
        });
    });

    describe('loginUser', () => { 
        test('should return a userId if credentials are correct', async () => {
            await userService.createUser(users[0].name, users[0].email, users[0].password);
            const userId = await userService.loginUser(users[0].email, users[0].password);
            expect(userId).toBeDefined();
        });

        test('should throw 401 if Email is incorrect', async () => {
            await userService.createUser(users[0].name, users[0].email, users[0].password);
            const error = new Error('Email is incorrect.');
            error.statusCode = 401;
            await expect(userService.loginUser('', users[0].password)).rejects.toThrowError(error);
        });

        test('should throw 401 if Password is incorrect', async () => {
            await userService.createUser(users[0].name, users[0].email, users[0].password);
            const error = new Error('Password is incorrect.');
            error.statusCode = 401;
            await expect(userService.loginUser(users[0].email, '')).rejects.toThrowError(error);
        });
    });

});