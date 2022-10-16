import connection from "../db/db.js";
import { v4 as uuid } from "uuid";

async function create (req,res) {
 const user = req.body;
 const token = uuid();

 try {
   const db = await connection();
   const userFound = await db.query(`SELECT * FROM users WHERE users.email=$1;`,[user.email])

   await db.query(`INSERT INTO sessions ("idUser",token,time) VALUES ($1,$2,$3)`,[userFound.rows[0].id,token,Date.now()])
   res.status(201).send({...userFound.rows[0], token:token, date:Date.now()})
   return

 } catch (error) {
    res.status(500).send(error)
    return
 }
}

export {create};