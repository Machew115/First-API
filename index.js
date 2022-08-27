// modules and globals
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()

// CONFIG/MIDDLEWARE
require('dotenv').config()
app.use(express.json())
app.use(cors())


mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('connected to mongo on: ', process.env.MONGO_URI)
})

//main index or start page
app.get('/', (req, res) => {
    res.send('We have Books!!')
})
//controllers
app.use('/books', require('./controllers/books-cont'))



//Port listener
app.listen(process.env.PORT)