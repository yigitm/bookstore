import React from 'react';
import {
  BrowserRouter as Router, Route, Routes, Link,
} from 'react-router-dom';
import Books from './book';
import Category from './category';
import style from './nav.module.css';

const Nav = () => (
  <Router>
    <nav>
      <div className="nav-items">
        <h1 className={style['Bookstore-CMS']}>Bookstore</h1>
        <ul>
          <li className={style.BOOKS}>
            <Link to="/">BOOKS</Link>
          </li>
          <li className={style.CATEGORIES}>
            <Link to="/category">CATEGORIES</Link>
          </li>
        </ul>
      </div>
      <i className="fas fa-user" />
    </nav>
    <Routes>
      <Route path="/" element={<Books />} />
      <Route path="/category" element={<Category />} />
    </Routes>
  </Router>
);
export default Nav;
