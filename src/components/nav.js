import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Books from './book';
import Category from './category';

const Nav = () => (
  <Router>
    <nav>
      <h1>Bookstore</h1>
      <ul>
        <li>
          <Link to="/">BOOKS</Link>
        </li>
        <li>
          <Link to="/category">CATEGORIES</Link>
        </li>
      </ul>
    </nav>
    <Routes>
      <Route path="/" element={<Books />} />
      <Route path="/category" element={<Category />} />
    </Routes>
  </Router>
);
export default Nav;
