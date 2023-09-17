export default class UserRepository {
    constructor({ userModel }) {
        this.userModel = userModel;
    }

    async createUser(userData) {
        const user = await new this.userModel(userData);
        await user.save();
        return user;
    }

    async loginUser(userData) {
        const user = await this.userModel.findOne(userData);
        return user;
    }

    async findUserByEmail(email) {
        const user = await this.userModel.findOne({'email':email});
        return user;
    }

    async findById(userId) {
        const user = await this.userModel.findById(userId);
        return user;
    }
}