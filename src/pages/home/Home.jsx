import React from 'react';
import AddBooks from '../../components/addBooks/AddBooks';
import Book from '../../components/books/Book';
import '../../styles/home.scss';

const Home = () => (
  <main className="home-container">
    <section className="books-section">
      <Book />
    </section>
    <section className="add-book-section">
      <AddBooks />
    </section>
  </main>
);

export default Home;
