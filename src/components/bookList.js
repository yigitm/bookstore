import React from 'react';
import { useSelector } from 'react-redux';

const Booklist = () => {
  const books = useSelector((state) => state.booksReducer);
  const displayB = books.map((item) => {
    return (
      <div className="book">
        <p>{item.title}</p>
        <button type="button">Remove</button>
      </div>
    );
  });

  return displayB;
};
export default Booklist;
