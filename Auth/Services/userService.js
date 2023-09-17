import bcrypt from "bcrypt";
import _ from "lodash";

export default class UserService {
    constructor({ userRepository }) {
        this.userRepository = userRepository;
    }
    
    async createUser(name, email, password ) {
        try {
            // check if email already existss
            const existingUser = await this.userRepository.findUserByEmail(email);
            if (existingUser) {
                const error = new Error('Email already exists');
                error.statusCode = 409; // Conflict
                throw error;
            }
            // Generate a salt to use for hashing the password
            const saltRounds = 12;
            const salt = await bcrypt.genSalt(saltRounds);
            // Hash the password using the generated salt
            const hashedPassword = await bcrypt.hash(password, salt);
            
            const user = await this.userRepository.createUser({
                'name': name,
                // 'surname': surname,
                'email': email,
                'password': hashedPassword,
            });
            return user._id;
        } catch (err) {
            if (err.statusCode === 409) {
                throw err;
            }
            const error = new Error('Internal server error.');
            error.statusCode = 500; // Internal Server Error
            throw error;
        }
    }

    async loginUser(email, password) {
        try {

            const user = await this.userRepository.loginUser({
                'email': email,
            });
            // check if email exist on database
            if (!user) {
                const error = new Error('Email is incorrect.');
                error.statusCode = 401; // Unauthorized
                throw error;
            }
            const validatePassword = await bcrypt.compare(password, user.password);
            if (!validatePassword) {
                const error = new Error('Password is incorrect.');
                error.statusCode = 401; // Unauthorized
                throw error;
            }
            return user._id;
        } catch (err) {
            if (err.statusCode === 401) {
                throw err;
            }
            
            const error = new Error('Internal server error.');
            error.statusCode = 500; // Internal Server Error
            throw error;
        }
    }

}