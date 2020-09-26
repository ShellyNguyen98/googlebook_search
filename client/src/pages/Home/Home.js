import React, {useState} from 'react'
import API from '../../utils/API'

const Home = () => {

    const [bookState, setBookState] = useState ({
        search: '',
        book: []
    })

    bookState.handleInputChange = event => {
        setBookState({ ...bookState, [event.target.name]: event.target.value})
    }

    bookState.handleSearchAPI = event => {
        event.preventDefault()
        API.getBook(bookState.search)
            .then(({ data }) => {
                setBookState({ ...bookState, book: data, search: ''})
            })
            .catch(err => console.error(err))
    }
    bookState.handleSaveBook = apiID => {
        const saveBook = bookState.book.filter(x => x.apiID === apiID)[0]
        API.saveBook(saveBook)
            .then(() => {
                const book = bookState.book.filter(x => x.apiID !== apiID)
                setBookState({ ...bookState, book})
            })
    }

    

    return (
        <>
        <h1>Book search</h1>
        <form>
            <p>
                <label htmlFor="search"></label>
                <input 
                type ="text" 
                name="search"
                value={bookState.search}
                onChange={bookState.handleInputChange}
                />
            </p>
            <p>
                <button onClick={bookState.handleSearchAPI}>Search</button>
            </p>
        </form>
        {
            bookState.book.length > 0 ? (
                bookState.book.map(book => (
                    <div>
                        <img src={book.image} alt={book.title}/>
                        <h3>{book.title}</h3>
                        <h4>Author: {book.author}</h4>
                        <h5>Description: {book.description}</h5>
                        <h6>Link: {book.link}</h6>
                    </div>
                ))
        
        ) : null
        
}
        </>
        )
}
export default Home