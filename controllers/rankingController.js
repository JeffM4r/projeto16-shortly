import connection from "../db/db.js"

async function list(req,res){
    
    try{
        const db = await connection();

        const {rows} = await db.query(`SELECT users.id, users.email, COUNT("shortUrls".url) as "linksCount", COALESCE(SUM("shortUrls"."visitCount"),0) as "visitCount" 
        FROM "shortUrls" 
        RIGHT JOIN users
        ON users.id = "shortUrls"."idUser"
        GROUP BY users.id
        ORDER BY "visitCount" DESC
        LIMIT 10`)
        res.status(200).send(rows)
    }catch(error){
        res.status(500).send(error)
    }
}

export {list}