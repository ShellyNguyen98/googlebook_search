const express = require ('express')

const app = express ()

app.use(express.urlendcoded({ extended: true}))
app.use(express.json())

