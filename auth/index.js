const express = require('express');
const router = express.Router();
const Member = require('../db/member');

const bcrypt = require('bcrypt')

router.get('/', (req, res) => {
    res.json({
        message: ('😍')
    });
});

function validUser(user) {
    const validEmail = typeof user.email == 'string' &&
        user.email.trim() != '';
    const validPassword = typeof user.password == 'string' && //varifies its a string
        user.password.trim() != '' &&
        user.password.trim().length >= 6;
    return validEmail && validPassword;
}

router.post('/signup', (req, res, next) => {
    if (validUser(req.body)) {
        Member.getOneByEmail(req.body.email)
            .then(member => {
                console.log('member', member)
                if (!member) {


                  //hash password
                  bcrypt.hash(req.body.password, 10 )
                  .then((hash) => {

                  //newmemeber
                    const member = {
                      username:req.body.username,
                      email:req.body.email,
                      date: new Date(),
                      password:hash

                    };

                    Member.create(member)
                    .then( id =>{
                      res.json({
                          id,
                          message: '😱'
                      });
                    })
                  //insert user into db
                  //redirect

                  });
                } else {
                  //email in use
                    next(new Error('Email in use'));
                }
            });
    } else {
        next(new Error('Invalid user'))
    }
});

module.exports = router;
