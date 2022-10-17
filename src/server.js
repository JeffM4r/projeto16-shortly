import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import signupRouter from "../routers/signupRouter.js"
import signinRouter from "../routers/signinRouter.js"
import urlsRouter from "../routers/urlsRouter.js"
import userRouter from "../routers/userRouter.js"
import rankingRouter from "../routers/rankingRouter.js"
import connection from "../db/db.js"

dotenv.config();
const server = express();

server.use(cors());
server.use(express.json());

server.use(signupRouter);
server.use(signinRouter);
server.use(urlsRouter);
server.use(userRouter);
server.use(rankingRouter);

async function statusCheck(){
    let sessions;

    try {
        const db = await connection();
        sessions = await db.query("SELECT * FROM sessions");

        sessions.rows.forEach( async (session) => {
            if(Math.round(session.createdAt.getTime() / 1000 + 1200) < Math.round(Date.now() / 1000.0)){
                await db.query(`DELETE FROM sessions WHERE sessions.id = $1`, [session.id])
            } 
        });
        
        
    } catch (error) {
        return;
    }
}

setInterval(statusCheck, 15000)

server.listen(process.env.PORT,() =>{
    console.log("listen on port " + process.env.PORT);
})