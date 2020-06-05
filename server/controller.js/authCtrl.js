const bcrypt = require('bcrypt')

module.exports = {
    login: async (req, res) => {
        const db = req.app.get('db')
        const {username, password} = req.body
        const outcome = await db.get_user(username)
        const user = outcome[0]

        if(!user){
            return res.status(404).send('User does not exist')
        }

        const authenticated = bcrypt.compareSync(password, user.hash)
        if(!authenticated){
            return res.status(403).send('Incorrect email or password')
        }

        delete user.hash
        req.session.user = user
        res.status(200).send(req.session.user)
    },

    register: async (req, res) => {
        const db = req.app.get('db')
        const {username, password} = req.body
        const img = `https://robohash.org/${username}`
        const outcome = await db.get_user(username)
        if(outcome[0]){
            return res.status(409).send('User already exists')
        }

        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)
        const user = await db.register_user([username, hash, img])
        delete user[0].hash
        req.session.user = user[0]
        res.status(200).send(req.session.user)
    },

    getUser: (req, res) => {
        if(req.session.user){
            return res.status(200).send(req.session.user)
        } else {
            res.sendStatus(404)
        }
    },

    logout: (req, res) => {
        req.session.destroy()
        res.sendStatus(200)
    }
}