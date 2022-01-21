import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getBooks } from './redux/books/books';
import './App.css';
import Nav from './components/nav';
import Footer from './components/footer';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks);
  }, []);

  return (
    <div className="container">
      <Nav />
      <Footer />
    </div>
  );
};

export default App;
