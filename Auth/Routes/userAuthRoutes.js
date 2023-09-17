import express from "express";
import { createUser, loginUser } from "../Controllers/userAuthController.js";
import { validateRegisterRequest, validateLoginRequest } from "../Middlewares/userMiddlewares.js";

//  create express router
const userAuthRoutes = express.Router();

// POST METHOD FOR SIGN-UP NEW USER
userAuthRoutes.post("/register", validateRegisterRequest, createUser);
// POST METHOD FOR LOGIN
userAuthRoutes.post("/login", validateLoginRequest, loginUser);
// export the router
export default userAuthRoutes;