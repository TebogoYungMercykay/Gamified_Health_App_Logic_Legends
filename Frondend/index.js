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