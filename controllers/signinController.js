import connection from "../db/db.js";
import { v4 as uuid } from "uuid";
import bcrypt from "bcrypt";

async function create(req, res) {
  const user = res.locals.user;
  const token = uuid();

  try {
    const db = await connection();
    const userFound = await db.query(`SELECT * FROM users WHERE users.email=$1;`, [user.email])
    if(!userFound.rows.length>0){
      res.status(401).send(error)
      return
    }

    const checkPassword = bcrypt.compareSync(user.password, userFound.rows[0].password)

    if(!checkPassword){
      res.status(401).send(error)
      return
    }

    await db.query(`DELETE from sessions WHERE "idUser"=$1`,[userFound.rows[0].id])

    await db.query(`INSERT INTO sessions ("idUser",token) VALUES ($1,$2)`, [userFound.rows[0].id, token])
    res.status(200).send({token: token})
    return

  } catch (error) {
    res.status(500).send(error)
    return
  }
}

export { create };