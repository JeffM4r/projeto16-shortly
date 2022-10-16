import express from "express";
import { create,listById,redirectLink } from "../controllers/urlsController.js";
import tokenVerification from "../middlewares/tokenVerificationMiddleware.js";

const urlsRouter = express.Router();

urlsRouter.post("/urls/shorten",tokenVerification, create);
urlsRouter.get("/urls/:id",tokenVerification, listById);
urlsRouter.get("/urls/open/:shortUrl",redirectLink);

export default urlsRouter;