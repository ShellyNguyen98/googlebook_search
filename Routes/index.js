const router = require('express').Router()

router.use('/api', require('./bookRoutes.js'))
router.use('/api', require('./ggapiRoutes.js'))

module.exports = router