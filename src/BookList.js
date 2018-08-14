import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import BookListItem from './BookListItem'



class BookList extends React.Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onUpdateShelf: PropTypes.func.isRequired
  }

  render() {
    const { books, onUpdateShelf } = this.props

    return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>

          <div className="list-books-content">
            <div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                  { books.filter(book => book.shelf === 'currentlyReading').map(book => (
                    <li key={book.id}>
                      <BookListItem book={book} onUpdateShelf={onUpdateShelf} currShelf = "currentlyReading" />
                    </li>
                    ))
                  }
                  </ol>
                </div>
              </div>

              <div className="bookshelf">
                <h2 className="bookshelf-title">Want to Read</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                  { books.filter(book => book.shelf === 'wantToRead').map(book => (
                    <li key={book.id}>
                      <BookListItem book={book} onUpdateShelf={onUpdateShelf} currShelf = "wantToRead" />
                    </li>
                    ))
                  }
                  </ol>
                </div>
              </div>

              <div className="bookshelf">
                <h2 className="bookshelf-title">Read</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                  { books.filter(book => book.shelf === 'read').map(book => (
                    <li key={book.id}>
                      <BookListItem book={book} onUpdateShelf={onUpdateShelf} currShelf = "read" />
                    </li>
                    ))
                  }
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <div className="open-search">
            <Link to="/search" className="open-search-link" >Add a book</Link>
          </div>
      </div>
    )
  }
}


export default BookList
