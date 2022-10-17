import express from "express";
import { list } from "../controllers/rankingController.js";


const rankingRouter = express.Router();

rankingRouter.get("/ranking", list);

export default rankingRouter;