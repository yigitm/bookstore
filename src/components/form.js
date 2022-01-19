import React from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';
import { v4 as uuid } from 'uuid';

const Form = () => {
  const dispatch = useDispatch();

  const submitBookToStore = (e) => {
    e.preventDefault();
    const form = document.getElementsByTagName('form')[0];
    const newBook = {
      id: uuid(),
      title: form.firstChild.value,
    };
    dispatch(addBook(newBook));
  };

  return (
    <div>
      <h2>ADD NEW BOOK</h2>
      <form>
        <input type="text" name="book" placeholder="Book title" />
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
export default Form;
