import express from "express";
import { create } from "../controllers/signupController.js";

const signupRouter = express.Router();

signupRouter.post("/signup", create);

export default signupRouter;