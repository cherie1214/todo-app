const express = require('express');
const Users = require('../models/users');
const router = express.Router();

router.get('/', (req, res) => {
    console.log(req.body.contents);
    return res.json({
        success: true
    });
});

router.get('/:id', (req, res) => {
    console.log('reading post ', req.params.id);
    Users.find(function(err, users){
    if(err) return res.status(500).send({error: 'database failure'});

    console.log(users)
    res.json(users)});
});

module.exports = router;
