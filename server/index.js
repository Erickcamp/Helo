require('dotenv').config()
const express = require('express')
const massive = require('massive')
const session = require('express-session')
const app = express()


const {SESSION_SECRET, CONNECTION_STRING, SERVER_PORT} = process.env

app.use(express.json())
app.use(session({
    resave:false,
    saveUninitialized: true,
    cookie: {maxAge: 1000 * 60 * 60 * 24 * 30},
    secret: SESSION_SECRET
}))

// endpoints here

massive({
    connectionString: CONNECTION_STRING,
    ssl: 
        {rejectUnauthorized: false}
}).then(db => {
    app.set('db', db)
    console.log('db is online')
    app.listen(SERVER_PORT, () => {
        console.log(`Server port is running on port ${SERVER_PORT}`)
    })
})

