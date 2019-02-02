const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/', (req, res) => {
    // return the project rows from DB
    const queryText = `SELECT * FROM projects;`;
    pool.query(queryText)
        .then((sqlResult) => {
            console.log(sqlResult);
            res.send(sqlResult.rows);
        }).catch((error) => {
            console.log(`Error on query ${error}`);
            res.sendStatus(500);
        });
});

module.exports = router;