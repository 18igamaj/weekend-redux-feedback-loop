const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')
// created my router and linked it to my server

// created router side get to be able to get info from the database and pass it to client
router.get('/', (req,res) => {
    const sqlText = `SELECT * FROM feedback  ORDER by "id" `
    pool.query(sqlText)
    .then(result => {
        console.log('Got my feedback from database!', result.rows)
        res.send(result.rows)
    }).catch(err => {
        console.log('SERVER SIDE GET DO NOT', err)
        res.sendStatus(500)
    })
})

//created router post to be able to communicate with database and front end to store items
router.post('/',(req,res) => {
    let newFeed = req.body

    const sqlText = `INSERT INTO feedback ("feeling", "understanding", "support", "comments")
    VALUES ($1,$2,$3,$4)`

    pool.query(sqlText,[newFeed.feeling,newFeed.understanding,
                        newFeed.support,newFeed.comments])
    .then(result => {
        res.sendStatus(201)
    }).catch(err => {
        console.log('Oh No Our Post Router', err)
        res.sendStatus(500)
    })
} )





module.exports = router
