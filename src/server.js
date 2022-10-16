import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import signupRouter from "../routers/signupRouter.js"
import signinRouter from "../routers/signinRouter.js"
import urlsRouter from "../routers/urlsRouter.js"

dotenv.config();
const server = express();

server.use(cors());
server.use(express.json());

server.use(signupRouter);
server.use(signinRouter);
server.use(urlsRouter);

server.listen(process.env.PORT,() =>{
    console.log("listen on port " + process.env.PORT);
})