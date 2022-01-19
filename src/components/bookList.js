import React from 'react';
import { useSelector } from 'react-redux';

const Booklist = () => {
  const books = useSelector((state) => state.booksReducer);
  const displayB = books.map((book) => {
    return (
      <div key={book.id} className="book">
        <p>{book.title}</p>
        <button type="button">Remove</button>
      </div>
    );
  });

  return displayB;
};
export default Booklist;
