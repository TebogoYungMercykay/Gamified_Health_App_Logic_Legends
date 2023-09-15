// provides a set of features and tools for handling HTTP requests and 
// responses, routing, middleware, and more.
import express from "express";
// secure Express apps by setting various HTTP headers
import helmet from "helmet"
// used to secure sensitive data
import dotenv from 'dotenv';
// HTTP request logger 
import morgan from "morgan";
// Import mongoose to connect to MongoDB
import mongoose from "mongoose";
import {
  createContainer,
  asClass,
  asValue
} from "awilix";
import { scopePerRequest } from 'awilix-express';

// use .env port number or 3000
const port = process.env.PORT || 3000;

export const app = express();

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.once('open', () => {
  console.log('Connected to database');
});

// Middleware to preventing any dependency conflicts between requests
app.use(scopePerRequest(container));
// Middleware to parses incoming JSON payloads 
app.use(express.json());
// Middleware to set security-related HTTP headers
app.use(helmet());
// Middleware to log HTTP requests and responses
app.use(morgan("common"));


// Listen to port number
export const server = app.listen(port, () => {
    console.log("Server running on port " + port);
});