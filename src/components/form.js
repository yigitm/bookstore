import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const Form = () => {
  const dispatch = useDispatch();

  const submitBookToStore = (e) => {
    e.preventDefault();
    dispatch(addBook());
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
