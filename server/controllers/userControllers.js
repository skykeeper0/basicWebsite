const User = require('./../models/models')

const userControllers = {
    createUser(req, res, next) {
        User
            .create({
                username: req.body.username,
                password: req.body.password
            }).then( (user) => {
                res.json(user)
            }).catch( (err) => {
                res.send('Cant create user')
            })
    },

    findUser(req, res, next) {

        User
            .findOne({
                username: req.body.username
            }).then( (user) => {
                if (user) {
                    if (user.password === req.body.password) {
                        res.json(user)
                    } else {
                        res.status(401).send('Wrong password')
                    }
                } else {
                    res.status(401).send('There are no such user')
                }
            }).catch( (err) => {
                res.status(500).send(err)
            })
    },

    getUser(req, res, nect) {
        
        User
            .find({})
            .exec( (err, users) => {
                if (err) res.send(err);
                res.json(users);
            })
    }
}

module.exports = userControllers;