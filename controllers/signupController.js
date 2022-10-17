import connection from "../db/db.js";
import bcrypt from "bcrypt";

async function create (req,res) {
 const user = res.locals.user
 const passwordEncrypted = bcrypt.hashSync(user.password,10)

 try {
   const db = await connection();
   const checkUser = await db.query(`SELECT * FROM users WHERE email=$1`,[user.email])
   
   if(checkUser.rows.length > 0){
      res.status(409).send("conflito, email já cadastrado")
      return
   }

   await db.query(`INSERT INTO users (name,email,password) VALUES ( $1, $2, $3 );`,[user.name, user.email, passwordEncrypted])
   res.sendStatus(201)   

 } catch (error) {
    res.status(500).send(error)
    return
 }
}

export {create};