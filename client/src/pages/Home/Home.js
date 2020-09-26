import React, {useState} from 'react'

const Home = () => {

    const [bookState, setBookState] = useState ({
        search: '',
        book: []
    })

    bookState.handleInputChange = event => {
        setBookState({ ...bookState, [event.target.name]: event.target.value})
    }

    bookState.handleSearchggapi = event => {
        event.preventDefault()
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
                <button onClick={bookState.handleSearchggapi}>Search</button>
            </p>
        </form>
        </>
    )
}

export default Home