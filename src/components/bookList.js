import React from 'react';
import { useSelector } from 'react-redux';

const Booklist = () => {
  const books = useSelector((state) => state.booksReducer);

  return (
    <div className="book">
      <p>{books}</p>
      <button type="button">Remove</button>
    </div>
  );
};
export default Booklist;
