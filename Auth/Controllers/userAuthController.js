import { validationResult } from 'express-validator'; // validating 

export const createUser = async (req, res) => {
    const errors = validationResult(req);
    try {
        if (!errors.isEmpty()) {
            // 400 Bad Request
            const error = new Error('Bad Request');
            error.statusCode = 400; // The server did not understand the request
            throw error;
        }
        // request body object destructuring 
        const { name, email, password } = req.body;
        // Resolve the userService from the container
        const userService = req.container.resolve('userService');
        // Call the createUser function from the controller
        const _id = await userService.createUser(name, email, password);

        res.status(201).send({ // Created
            message: 'User created successfully',
            data: { _id: _id }
        });
    } catch (error) {
        res.status(error.statusCode).send({ error: error.message });
    }
}

export const loginUser = async (req, res) => {
    const errors = validationResult(req);
    try {
        if (!errors.isEmpty()) {
            // 400 Bad Request
            const error = new Error('Bad Request');
            error.statusCode = 400; // The server did not understand the request
            throw error;
        }
        // request body object destructuring 
        const { email, password } = req.body;
        // Resolve the userService from the container
        const userService = req.container.resolve('userService');
        const _id = await userService.loginUser(email, password);
        
        res.status(200).send({ // OK
            message: "Authentication successful",
            data: { _id: _id }
        });
    } catch (error) {
        res.status(error.statusCode).send({ error: error.message });
    }
}