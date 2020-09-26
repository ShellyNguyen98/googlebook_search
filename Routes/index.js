const router = require('express').Router()

router.use('/api', require('./bookRoutes.js'))
router.use('/api', require('./googleapis.js'))

module.exports = router