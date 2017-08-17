const express = require('express')
const app = express()
const router = express.Router()
const path = require('path')


app.get('/', function(req, res) {
    if(req.query.v === '5') {
        app.use(express.static('public'))
        res.sendFile(path.join(__dirname, 'public', 'VeryHappy.html'))
    } else if (req.query.v === '4') {
        app.use(express.static('public'))
        res.sendFile(path.join(__dirname, 'public', 'Happy.html'))
    } else if (req.query.v === '3') {
        app.use(express.static('public'))
        res.sendFile(path.join(__dirname, 'public', 'Neutral.html'))
    } else if (req.query.v === '2') {
        app.use(express.static('public'))
        res.sendFile(path.join(__dirname, 'public', 'Unhappy.html'))
    } else if (req.query.v === '1') {
        app.use(express.static('public'))
        res.sendFile(path.join(__dirname, 'public', 'VeryUnhappy.html'))
    }
})


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})