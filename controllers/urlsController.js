import connection from "../db/db.js";
import { nanoid } from 'nanoid';

async function create(req, res) {
    const url = req.body;
    const user = res.locals.user
    const shortUrl = nanoid();

    try {
        const db = await connection();
        await db.query(`INSERT INTO "shortUrls" ("idUser",url,"shortUrl","visitCount") VALUES ( $1, $2, $3, $4 );`, [user.id, url.url, shortUrl, 0])
        res.status(201).send({ shortUrl })

    } catch (error) {
        res.status(500).send(error)
        return
    }
}

async function listById(req, res) {
    const { id } = req.params

    try {
        const db = await connection();
        const { rows } = await db.query('SELECT id, "shortUrl", url FROM "shortUrls" WHERE id=$1', [ Number(id) ])
        if (!rows.length) {
            return res.sendStatus(404)
        }
        res.status(200).send(rows[0])

    } catch (error) {

        res.status(500).send(error)
    }
}

async function redirectLink(req,res){

}



export { create, listById, redirectLink };