import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { addBook } from '../redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const submitBookToStore = (e) => {
    e.preventDefault();
    const newBook = {
      item_id: uuid(),
      title: title,
      category: 'Fiction',
    };
    dispatch(addBook(newBook));
    setTitle('');
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
      </form>
    </div>
  );
};
export default AddBook;
