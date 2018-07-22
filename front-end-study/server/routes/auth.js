const express = require('express');
const Users = require('../models/users');
const router = express.Router();

router.get('/', (req, res) => {
    console.log(req.body.contents);
    return res.json({
        success: true
    });
});
router.post('/signIn', (req, res) => {
    console.log(req.body);
    
    Users.findOne({id: req.body.id}, (err, doc) => {
        if(err){
            res.json({
                status: "SIGNIN_ERROR"
            })
            return false;
        }
        // 아이디가 없을 경우
        if(!doc || doc === {}){
            res.json({
                status: "SIGNIN_FAILED"
            })
            return false;
        }
        // 비밀번호가 일치하지 않을 경우
        if(doc.pw !== req.body.pw){
            res.json({
                status: "SIGNIN_FAILED"
            })
            return false;
        }
        // 성공!
        res.json({
            status: "SIGNIN_SUCCESS",
            nickname: doc.nickname,
            id: doc.id,
        })
        return false;
    })
});

router.post('/signUp', (req, res) => {
    // console.log(req.body)

    // 중복체크
    Users.findOne({ $or : [
            {id: req.body.id},
            {nickname: req.body.nickname},
    ]}, (err, doc) => {
        // console.log(doc)
        if(doc && doc.id && doc.id === req.body.id){
            res.json({
                status: "SIGNUP_ID_DUPLICATED"
            })
            return false;
        }
        if(doc && doc.nickname && doc.nickname === req.body.nickname){
            res.json({
                status: "SIGNUP_NICKNAME_DUPLICATED"
            })
            return false;
        }

        // 아이디 생성
        let user = new Users({
            id: req.body.id,
            pw: req.body.pw,
            nickname: req.body.nickname,
        });
        user.save((err) => {
            if(err) {
                res.json({ status: "SIGNUP_FAILED"})
                return false;
            }
            res.json({ status: "SIGNUP_SUCCESS" })
        })
    })

});



module.exports = router;
