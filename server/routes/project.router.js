const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/', (req, res) => {
    // return the project rows from DB
    const queryText = `SELECT projects.name, description, 
                       thumbnail, website, github, 
                       date_completed, tag_id, tags.name as technology
                       FROM projects
                       JOIN tags ON tags.id = projects.tag_id;`;
    pool.query(queryText)
        .then((sqlResult) => {
            console.log(sqlResult);
            res.send(sqlResult.rows);
        }).catch((error) => {
            console.log(`Error on query ${error}`);
            res.sendStatus(500);
        });
});

router.post('/', (req, res) => {
    //add the new project to the database
    console.log('in the post router');

    const newProject = req.body;
    console.log(`newProject name: ${newProject.name}, description: 
    ${newProject.description} date: ${newProject.date_completed} 
    technology: ${newProject.technology}`);
    const queryText = `INSERT INTO "projects" 
                       ("name", "description", "thumbnail", "website", 
                       "date_completed", "tag_id")
                       VALUES ($1, $2, $3, $4, $5, $6);`;
    pool.query(queryText, [newProject.name, newProject.description, 
                           newProject.thumbnail, newProject.website, 
                           newProject.date_completed, newProject.technology])
    .then((response) => {
        console.log(response);
        res.sendStatus(201);
    }).catch((error) => {
        console.log(`error in posting new project: ${error}`);
        res.sendStatus(500);
    });
})

module.exports = router;