import express from "express";
import { create,listById,redirectLink,remove } from "../controllers/urlsController.js";
import { urlCheckMiddleware } from "../middlewares/schemasMiddleware.js";
import tokenVerification from "../middlewares/tokenVerificationMiddleware.js";

const urlsRouter = express.Router();

urlsRouter.post("/urls/shorten",urlCheckMiddleware, tokenVerification, create);
urlsRouter.get("/urls/:id", listById);
urlsRouter.get("/urls/open/:shortUrl", redirectLink);
urlsRouter.delete("/urls/:id", tokenVerification, remove);

export default urlsRouter;