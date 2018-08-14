import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BookListItem from './BookListItem'


class SearchBooks extends React.Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onUpdateShelf: PropTypes.func.isRequired
  }

  state = {
    query: '',
    searchResults: []
  }

  updateQuery = (query) => {
    this.setState({ query })
    this.updateResults(query)
  }

  updateResults = (query) => {
    if (query.length > 0) {
      BooksAPI.search(query).then(response => {
        if (response) {
          this.setState({ searchResults: response })
        } else {
          this.setState({ searchResults: [] })
        }
      })
    } else {
        this.setState({ searchResults: [] })
    }
  }

  render() {
    const { books, onUpdateShelf } = this.props
    const { query, searchResults } = this.state

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
          <div className="search-books-input-wrapper">

            <input
              type="text"
              placeholder="Search by title or author"
              value={query || ''}
              onChange={(event) => this.updateQuery(event.target.value)}
            />

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
          {searchResults.map(searchResult => {
            //console.log(searchResult);
            let shelf = 'none';
            books.map(book => (
              book.id === searchResult.id ? shelf = book.shelf : ''
            ))
            return (
              <li key={searchResult.id}>
                <BookListItem
                  book={searchResult}
                  currShelf={shelf}
                  onUpdateShelf={onUpdateShelf}
                />
              </li>
            )
          })}
          </ol>
        </div>
      </div>
    )
  }
}


export default SearchBooks
