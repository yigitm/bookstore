import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { addBook, getBooks } from '../redux/books/books';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const books = useSelector((state) => state.booksReducer);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleAuthorChange = (e) => {
    setAuthor(e.target.value);
  };

  const dispatch = useDispatch();

  const submitBookToStore = (e) => {
    e.preventDefault();
    const newBook = {
      id: uuid(),
      title,
      author,
    };
    dispatch(addBook(newBook));
    setTitle('');
    setAuthor('');
  };

  const apiCall = () => {
    dispatch(getBooks(dispatch));
  };

  return (
    <div>
      <h2>ADD NEW BOOK</h2>
      <form>
        <input
          type="text"
          name="book"
          placeholder="Title"
          value={title}
          onChange={handleTitleChange}
        />
        <input
          type="text"
          name="book"
          placeholder="Author"
          value={author}
          onChange={handleAuthorChange}
        />
        <select>
          <option value="Category-1">Category-1</option>
          <option value="Category-2">Category-2</option>
          <option value="Category-3">Category-3</option>
        </select>
        <input
          type="submit"
          value="Submit"
          onClick={(e) => submitBookToStore(e)}
        />
        <button type="button" onClick={(e) => apiCall(e)}>
          API
        </button>
      </form>
    </div>
  );
};
export default AddBook;
