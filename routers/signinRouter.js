import express from "express";
import { create } from "../controllers/signinController.js";

const signinRouter = express.Router();

signinRouter.post("/signin", create);

export default signinRouter;