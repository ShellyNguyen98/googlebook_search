const express = require ('express')

const app = express ()

app.use(express.urlendcoded({ extended: true}))
app.use(express.json())

app.use(require('./routes'))

require('./db')
    .then (() => applicationCache.addEventListener(process.env.PORT || 3001))
    .catch (err => console.log(err))