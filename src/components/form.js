import React from 'react';

const Form = () => (
  <div>
    <h2>ADD NEW BOOK</h2>
    <form>
      <input type="text" name="book" />
      <select>
        <option value="Category-1">Category-1</option>
        <option value="Category-2">Category-2</option>
        <option value="Category-3">Category-3</option>
      </select>
      <input type="submit" value="Submit" placeholder="Book title" />
    </form>
  </div>
);
export default Form;
