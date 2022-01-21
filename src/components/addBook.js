import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { addBook } from '../redux/books/books';
import styles from './addBook.module.css';

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
      title,
      category: 'Fiction',
    };
    dispatch(addBook(newBook));
    setTitle('');
  };

  return (
    <div>
      <h2 className={styles['title']}>ADD NEW BOOK</h2>
      <form>
        <input
          type="text"
          name="book"
          placeholder="Book title"
          value={title}
          className={styles['book-title']}
          onChange={handleTitleChange}
        />
        <select className={styles['category']}>
          <option value="Category-1">Category-1</option>
          <option value="Category-2">Category-2</option>
          <option value="Category-3">Category-3</option>
        </select>
        <input
          type="submit"
          value="ADD BOOK"
          className={styles['Rectangle-2']}
          onClick={(e) => submitBookToStore(e)}
        />
      </form>
    </div>
  );
};
export default AddBook;
