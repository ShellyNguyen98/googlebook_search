module.exports = require('mongoose').connect('mongodb://localhost/googlebooks_db', {
    useNewUrlParser: true,
    useFindAndModify: true,   
})

require('./db')
    .then (() => applicationCache.addEventListener(process.env.PORT || 3001))
    .catch (err => console.log(err))