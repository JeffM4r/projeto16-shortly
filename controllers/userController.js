import connection from "../db/db.js";

async function list(req, res) {
    const user = res.locals.user
    try {
        const db = await connection();

        const userFound = await db.query('SELECT * FROM "users" WHERE id=$1', [user.id]);

        if (!userFound.rows.length) {
            return res.sendStatus(404)
        }
        const userUrls = await db.query(`SELECT "shortUrls".id,  "shortUrls"."shortUrl", "shortUrls".url, "shortUrls"."visitCount"
                                        FROM "shortUrls" 
                                        JOIN users ON "shortUrls"."idUser"=users.id 
                                        WHERE "shortUrls"."idUser" = $1;`, [user.id])

        let totalVisit = 0;
        let links = [];
        userUrls.rows.forEach(item => {
            totalVisit += item.visitCount;
            links.push(item);
        })

        res.send({  id: user.id,
                    name: user.name,
                    visitCount: totalVisit,
                    shortenedUrls:links })
        return

    } catch (error) {
        res.status(500).send(error)
        return
    }
}

export { list };