import React from 'react'
import PropTypes from 'prop-types'


class BookListItem extends React.Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    currShelf: PropTypes.string.isRequired,
    onUpdateShelf: PropTypes.func.isRequired
  }

  render() {
    const { book, currShelf, onUpdateShelf } = this.props

    let imageLink = book.imageLinks ? book.imageLinks.thumbnail : ''
    let authors = book.authors ? book.authors.join(', ') : ''

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url( ${imageLink})` }}></div>
          <div className="book-shelf-changer">
            <select onChange={(event) => onUpdateShelf(book, event.target.value)} value={currShelf}>
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{authors}</div>
      </div>
    )
  }
}

export default BookListItem
