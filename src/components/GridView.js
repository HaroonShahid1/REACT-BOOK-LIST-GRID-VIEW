import React from 'react';
import './css/GridView.css';

function GridView({ books }) {
  return (
    <div className="gridViewContainer">
      <div className="gridView">
        {books.map(book => (
          <div key={book.id} className="gridViewItem">
            <p className="title"><strong>{book.title}</strong></p>
            <p className="genre">{book.genre}</p>
            <p className="date"><strong>Published Date:</strong> {book.date}</p>
            <p className="description"><strong>Description:</strong> {book.description}</p>
            <p className="status"><strong>Status:</strong> {book.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GridView;
