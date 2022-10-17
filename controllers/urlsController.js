import connection from "../db/db.js";
import { nanoid } from 'nanoid';

async function create(req, res) {
    const url = res.locals.url;
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
    const {shortUrl} = req.params
    try{
        const db = await connection();
        const {rows} = await db.query('SELECT url FROM "shortUrls" WHERE "shortUrl"=$1',[shortUrl])
        if(!rows.length){
            return res.sendStatus(404)
        }
    

        await db.query('UPDATE "shortUrls" SET "visitCount"= "visitCount" + 1 WHERE "shortUrl"=$1',[shortUrl])
        
        res.redirect(200,rows[0].url)
    }catch(error){
        res.status(500).send(error)
    }
}

async function remove(req,res){
    const user = res.locals.user
    const {id} = req.params
    try{
        const db = await connection()
        const {rows} = await db.query('SELECT * FROM "shortUrls" WHERE id=$1',[id])
        if(!rows.length){
            res.sendStatus(404)
            return
        }
        
        if(user.id === rows[0].idUser){
            await db.query('DELETE FROM "shortUrls" WHERE "idUser"=$1 AND id=$2',[user.id, id])
            res.sendStatus(204)
            return 
        }
        res.sendStatus(401)
    }catch(e){
        res.status(500).send(e)
    }
}



export { create, listById, redirectLink, remove };