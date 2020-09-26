const router = require('express').Router()
const axios = require('axios')

router.get('/googleapis/:search', (req, res) => {
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${req.params.search}`)
        .then(({ data }) => {
            res.json(data)
        })
        .catch(err => console.log(err))
})

module.exports = router