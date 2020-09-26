const router = require('express').Router()
const axios = require('axios')
const { Book } = require('../models')

router.get('/ggapi/:search', (req, res) => {
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${req.params.search}`)
        .then(({ data }) => data.Search.map(book => ({
            title: book.volumeInfo.Title,
            author: book.volumeInfo.Author,
            description : book.volumeInfo.Description,
            image : book.volumeInfo.imageLinks.thumbnail,
            link : book.infoLink,
            apiId: book.id
        })))
        .then(apiBook => Book.find()
            .then(book => apiBook.filter(data => 
                book.every(dbData => dbData.apiId !== data.apiId)
                )) )
            .then(book => res.json(book))
            .catch(err => console.log(err))        
})

module.exports = router