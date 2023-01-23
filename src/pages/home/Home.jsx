import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import AddBooks from '../../components/addBooks/AddBooks';
import Book from '../../components/books/Book';
import { addBooks } from '../../redux/books/books';
import '../../styles/home.scss';

const getDataFromLocalStorage = () => {
  const data = localStorage.getItem('books');
  if (data) {
    return JSON.parse(data);
  }
  return [];
};

const Home = () => {
  // const allBooks = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const [storedBooks, setStoredBooks] = useState(getDataFromLocalStorage());
  console.log(setStoredBooks);

  dispatch(addBooks(storedBooks));
  let renderBooks = '';
  renderBooks = storedBooks.length > 0 ? (
    storedBooks.map((elem) => (
      <>
        <section className="books-section" key={elem.id}>
          <Book data={elem} />
        </section>
      </>
    ))
  ) : (
    <div className="no-element-error">
      <h3>There is no Book in your Megazine, try adding some!</h3>
    </div>
  );

  return (
    <main className="home-container">
      {renderBooks}
      <div className="horizontal-divide" />
      <section className="add-book-section">
        <AddBooks />
      </section>
    </main>
  );
};

export default Home;
