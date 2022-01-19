import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { delBook } from '../redux/books/books';

const Booklist = () => {
  const books = useSelector((state) => state.booksReducer);
  const dispatch = useDispatch();

  const removeBook = (e) => {
    dispatch(delBook(e.target.parentElement.id));
  };

  const displayB = books.map((book) => {
    return (
      <div key={book.id} id={book.id} className="book">
        <p>{book.title}</p>
        <button type="button" onClick={(e) => removeBook(e)}>
          Remove
        </button>
      </div>
    );
  });

  return displayB;
};
export default Booklist;
