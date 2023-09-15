import mongoose from "mongoose";
import UserRepository from "../../Repository/userRepository.js";
import userModel from "../../Models/userModel.js";
import { _id, users } from "../../Fixtures/usersFixtures.js";
import dotenv from 'dotenv';

dotenv.config();

describe('UserRepository', () => {
    beforeAll(async () => {
        await mongoose.connect(process.env.MONGO_URL_TESTS, {
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
            expect(user).toHaveProperty('username', users[0].username);
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
            expect(user).toHaveProperty('username', users[1].username);
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

    describe('findUserByUsernameOrEmail', () => {
        it('should return a user by username', async () => {
            const userRepository = new UserRepository({ userModel: userModel });
            
            await userRepository.createUser(users[2]);
            const user = await userRepository.findUserByUsernameOrEmail(users[2].username, '');
            expect(user).toHaveProperty('_id');
            expect(user).toHaveProperty('username', users[2].username);
            expect(user).toHaveProperty('email', users[2].email);
            expect(user).toHaveProperty('password', users[2].password);
        });

        it('should return a user by email', async () => {
            const userRepository = new UserRepository({ userModel: userModel });
            
            await userRepository.createUser(users[2]);
            const user = await userRepository.findUserByUsernameOrEmail('', users[2].email);
            expect(user).toHaveProperty('_id');
            expect(user).toHaveProperty('username', users[2].username);
            expect(user).toHaveProperty('email', users[2].email);
            expect(user).toHaveProperty('password', users[2].password);
        });

        it('should return a user by username or email', async () => {
            const userRepository = new UserRepository({ userModel: userModel });
            
            await userRepository.createUser(users[2]);
            const user = await userRepository.findUserByUsernameOrEmail(users[2].username, users[2].email);
            expect(user).toHaveProperty('_id');
            expect(user).toHaveProperty('username', users[2].username);
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
            expect(user).toHaveProperty('username', users[2].username);
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

    describe('findByIdAndUpdate', () => { 
        it('Should return user if _id is correct', async () => { 
            const userRepository = new UserRepository({ userModel: userModel });

            const _user = await userRepository.createUser(users[1]);
            const user = await userRepository.findByIdAndUpdate(_user._id, users[2]);
            expect(user).toHaveProperty('_id', _user._id);
            expect(user).toHaveProperty('username', users[2].username);
            expect(user).toHaveProperty('email', users[2].email);
            expect(user).toHaveProperty('password', users[2].password);
        });

        it('Should return null if _id is incorrect', async () => { 
            const userRepository = new UserRepository({ userModel: userModel });

            await userRepository.createUser(users[1]);
            const user = await userRepository.findByIdAndUpdate(_id, users[2]);
            expect(user).toEqual(null);
        });
    });

    
    describe('findByIdAndDelete', () => { 
        it('Should return deleted user if _id is correct', async () => { 
            const userRepository = new UserRepository({ userModel: userModel });

            const _user = await userRepository.createUser(users[1]);
            const user = await userRepository.findByIdAndUpdate(_user._id);
            expect(user).toHaveProperty('_id', _user._id);
            expect(user).toHaveProperty('username', _user.username);
            expect(user).toHaveProperty('email', _user.email);
            expect(user).toHaveProperty('password', _user.password);
        });

        it('Should return null if _id is incorrect', async () => { 
            const userRepository = new UserRepository({ userModel: userModel });

            await userRepository.createUser(users[1]);
            const user = await userRepository.findByIdAndUpdate(_id);
            expect(user).toEqual(null);
        });
    });

    // updateFollowers
    describe('updateFollowers', () => { 
        it('should add the otherUserId to the userId followers array', async () => {
            const userRepository = new UserRepository({ userModel: userModel });
            const user = await userRepository.createUser(users[0]);
    
            const otherUser = await userRepository.createUser(users[1]);
      
            await userRepository.updateFollowers(user._id, otherUser._id);
      
            const updatedUser = await userRepository.findById(user._id);
            expect(updatedUser.followers).toEqual(expect.arrayContaining([otherUser._id]));
        });
      
    });

    describe('updateFollowings', () => { 
        it('should add the otherUserId to the userId followings array', async () => {
            const userRepository = new UserRepository({ userModel: userModel });
            const user = await userRepository.createUser(users[0]);
    
            const otherUser = await userRepository.createUser(users[1]);
      
            await userRepository.updateFollowings(user._id, otherUser._id);
      
            const updatedUser = await userRepository.findById(user._id);
            expect(updatedUser.followings).toEqual(expect.arrayContaining([otherUser._id]));
        });
      
    });

    describe('unFollow', () => {
        it('should remove the otherUserId from the userId followers array', async () => {
            const userRepository = new UserRepository({ userModel: userModel });
            const user = await userRepository.createUser(users[0]);
    
            const otherUser = await userRepository.createUser(users[1]);
      
            await userRepository.updateFollowers(user._id, otherUser._id);
            let updatedUser = await userRepository.findById(user._id);
            // before removing follower
            expect(updatedUser.followers).toEqual(expect.arrayContaining([otherUser._id]));
    
            await userRepository.unFollow(user._id, otherUser._id);
            updatedUser = await userRepository.findById(user._id);
            // after removing follower
            expect(updatedUser.followers).not.toEqual(expect.arrayContaining([otherUser._id]));
        });
    });

    describe('unFollowing', () => {
        it('should remove the otherUserId from the userId followings array', async () => {
            const userRepository = new UserRepository({ userModel: userModel });
            const user = await userRepository.createUser(users[0]);
    
            const otherUser = await userRepository.createUser(users[1]);
      
            await userRepository.updateFollowings(user._id, otherUser._id);
            let updatedUser = await userRepository.findById(user._id);
            // before removing following
            expect(updatedUser.followings).toEqual(expect.arrayContaining([otherUser._id]));
            
            await userRepository.unFollowing(user._id, otherUser._id);
            updatedUser = await userRepository.findById(user._id);
            // after removing following
            expect(updatedUser.followings).not.toEqual(expect.arrayContaining([otherUser._id]));
        });
    });
});  