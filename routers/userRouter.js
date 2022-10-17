import express from "express";
import tokenVerification from "../middlewares/tokenVerificationMiddleware.js";
import { list } from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.get("/users/me",tokenVerification, list);

export default userRouter;