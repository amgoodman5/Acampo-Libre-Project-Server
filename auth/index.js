const express = require('express');
const router = express.Router();
const Member = require('../db/member');


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
                    res.json({
                        member,
                        message: '😱'
                    });
                } else {
                    next(new Error('Email in use'));
                }
            });
    } else {
        next(new Error('Invalid user'))
    }
});

module.exports = router;
