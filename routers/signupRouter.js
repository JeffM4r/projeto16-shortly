import express from "express";
import { create } from "../controllers/signupController.js";
import { signupMiddleware } from "../middlewares/schemasMiddleware.js";

const signupRouter = express.Router();

signupRouter.post("/signup",signupMiddleware, create);

export default signupRouter;