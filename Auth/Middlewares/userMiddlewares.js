import { body } from "express-validator";

export const validateRegisterRequest =  [
    // check(() => Object.keys(req.body).length !== 3)
    //     .withMessage('Request body must contain exactly three properties'),
    body('name').trim().escape().notEmpty(),
    // body('surname').trim().escape().notEmpty(),
    body('email').normalizeEmail().escape().notEmpty().isEmail(),
    body('password').trim().escape().notEmpty().isLength({ min: 8 })
];

export const validateLoginRequest = [
    body('email').normalizeEmail().escape().notEmpty().isEmail(),
    body('password').trim().escape().notEmpty().isLength({ min: 8 })
];

export const validateIdRequest = [
    body('userId').trim().escape().notEmpty()
]