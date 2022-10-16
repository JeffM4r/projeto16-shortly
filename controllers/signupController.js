import connection from "../db/db.js";

async function create (req,res) {
 const user = req.body
 try {
   const db = await connection();
   await db.query(`INSERT INTO users (name,email,password) VALUES ( $1, $2, $3 );`,[user.name, user.email, user.password])
   res.sendStatus(201)   

 } catch (error) {
    res.status(500).send(error)
    return
 }
}

export {create};