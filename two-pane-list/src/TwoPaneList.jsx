import React, { useState } from "react";
const BookDetails = ({ book }) => {
  return (
    <div>
      {book.content.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
    </div>
  )
}

export const TwoPaneList = ({ books }) => {
  const [bookInFocus, setBookInFocus] = useState({ title: "", content: [] })

  return (
    <div>
      <div className="columns">
        <div className="column">
          <ul>
            {books.map((book) => {
              return (
                <li key={book.title}><a onClick={() => setBookInFocus(book)}>{book.title}</a></li>
              )
            })}
          </ul>
        </div>
        <div className="column">
          <BookDetails book={bookInFocus} />
        </div>
      </div>
    </div>

  )
}

const CodeList = ({ name }) => {
  return (
    <li>{name}</li>
  )
}
