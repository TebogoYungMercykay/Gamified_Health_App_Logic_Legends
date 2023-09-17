import mongoose from "mongoose";
import UserRepository from "../../Repository/userRepository.js";
import userModel from "../../Models/userModel.js";
import { _id, users } from "../../Fixtures/usersFixtures.js";
import dotenv from 'dotenv';

dotenv.config();

describe('UserRepository', () => {
    beforeAll(async () => {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    });

    afterAll(async () => {
        await mongoose.connection.close();
    }, 10000);

    afterEach(async () => {
        await userModel.deleteMany({});
    }, 10000);

    describe('createUser', () => {
        it('should create a new user', async () => {
            const userRepository = new UserRepository({ userModel: userModel });

            const user = await userRepository.createUser(users[0]);
            expect(user).toHaveProperty('_id');
            expect(user).toHaveProperty('email', users[0].email);
            expect(user).toHaveProperty('password', users[0].password);
        });
    });

    describe('loginUser', () => {
        it('should return a user if credentials are correct', async () => {
            const userRepository = new UserRepository({ userModel: userModel });
          
            await userRepository.createUser(users[1]);
            const user = await userRepository.loginUser(users[1]);
            expect(user).toHaveProperty('_id');
            expect(user).toHaveProperty('email', users[1].email);
            expect(user).toHaveProperty('password', users[1].password);
        });

        it('should return null if credentials are incorrect', async () => {
            const userRepository = new UserRepository({ userModel: userModel });
          
            await userRepository.createUser(users[1]);
            const user = await userRepository.loginUser(users[0]);
            expect(user).toEqual(null);
        });
    });

    describe('findUserByEmail', () => {
        it('should return a user by email', async () => {
            const userRepository = new UserRepository({ userModel: userModel });
            
            await userRepository.createUser(users[2]);
            const user = await userRepository.findUserByEmail(users[2].email);
            expect(user).toHaveProperty('_id');
            // expect(user).toHaveProperty('username', users[2].username);
            expect(user).toHaveProperty('email', users[2].email);
            expect(user).toHaveProperty('password', users[2].password);
        });

        it('should return a user by email', async () => {
            const userRepository = new UserRepository({ userModel: userModel });
            
            await userRepository.createUser(users[2]);
            const user = await userRepository.findUserByEmail(users[2].email);
            expect(user).toHaveProperty('_id');
            // expect(user).toHaveProperty('username', users[2].username);
            expect(user).toHaveProperty('email', users[2].email);
            expect(user).toHaveProperty('password', users[2].password);
        });
    })

    describe('findById', () => {
        it('Should return user if _id is correct', async () => {
            const userRepository = new UserRepository({ userModel: userModel });

            const _user = await userRepository.createUser(users[2]);
            const user = await userRepository.findById(_user._id);
            expect(user).toHaveProperty('_id', _user._id);
            // expect(user).toHaveProperty('username', users[2].username);
            expect(user).toHaveProperty('email', users[2].email);
            expect(user).toHaveProperty('password', users[2].password);
        });

        it('Should return null if _id is incorrect', async () => {
            const userRepository = new UserRepository({ userModel: userModel });

            await userRepository.createUser(users[2]);
            const user = await userRepository.findById(_id);
            expect(user).toEqual(null);
        });
    });
});  