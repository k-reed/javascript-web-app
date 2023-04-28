const express = require('express')
const app = express()

const router = require('./router')

app.use(express.urlencoded({extended: false})) // allows HTML form submits
app.use(express.json()) // allows JSON readability

app.use(express.static('public'))
app.set('views', 'views')
app.set('view engine', 'ejs')

app.use('/', router)

module.exports = app