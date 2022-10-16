import connection from "../db/db.js";

export async function tokenVerification(req, res, next){
    const authorization = req.headers.authorization
    const token = authorization?.replace("Bearer ", "")

    try{
        const db = await connection()
        const isLogged = await db.query('SELECT * FROM sessions WHERE token=$1',[token])
        if(isLogged.rows.length === 0){
            return res.sendStatus(401)
        }

        const {rows} = await db.query(`SELECT users.id,users.name,users.email,sessions.token FROM users 
        JOIN sessions
        ON users.id = sessions."idUser"
        WHERE users.id = $1
        `,[isLogged.rows[0].idUser])

        res.locals.user = rows[0]
    }catch(e){
        return res.status(500).send(e)
    }

    next()
}

export default tokenVerification;