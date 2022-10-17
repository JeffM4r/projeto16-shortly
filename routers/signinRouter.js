import express from "express";
import { create } from "../controllers/signinController.js";
import { signinMiddleware } from "../middlewares/schemasMiddleware.js";

const signinRouter = express.Router();

signinRouter.post("/signin", signinMiddleware, create);

export default signinRouter;