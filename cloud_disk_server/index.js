const express = require('express')
const mongoose = require('mongoose')
const config = require('config')


const app = express()

const PORT = config.get("serverPort")

const start = async() => {
    try {

        await mongoose.connect(config.get("dbUrl"))

        app.listen(PORT, () => {
            console.log("listening on port " + PORT)
        })
    } catch (err) {

    }
}
start()