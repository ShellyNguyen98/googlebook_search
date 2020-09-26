const Router = require('express').Router()

Router.use('/api', require('./bookRoutes.js'))

module.exports = Router