import React from 'react';
import './css/ListView.css';

function ListView({ books }) {
  return (
    <div className="listViewContainer">
      <table className="listViewTable">
        <thead>
          <tr>
            <th>Book Name</th>
            <th>Date of Publish</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {books.map(book => (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>{book.date}</td>
              <td>{book.description}</td>
              <td>{book.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListView;
