const express = require('express');
const Users = require('../models/users');
const router = express.Router();

router.get('/', (req, res) => {
    console.log(req.body.contents);
    return res.json({
        success: true
    });
});

router.post('/signUp', (req, res) => {
//   console.log(req.body)
    let user = new Users({
        id: req.body.id,
        pw: req.body.pw,
        nickname: req.body.nickname,
    });
    user.save((err) => {
        if(err) {
            res.json({ status: "FAILED"})
            return false;
        }
        res.json({ status: "SUCCESS" })
    })
});

module.exports = router;
