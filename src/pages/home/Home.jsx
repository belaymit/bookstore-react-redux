import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AddBooks from '../../components/addBooks/AddBooks';
import Book from '../../components/books/Book';
import { fetchBooks } from '../../redux/books/books';
import '../../styles/home.scss';

const Home = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  let renderBooks = '';
  renderBooks = books.length > 0 ? (
    books.map((elem) => (
      <>
        <Book
          id={elem.id}
          key={elem.id}
          book={elem}
          title={elem.title}
          author={elem.author}
          category={elem.category}
        />
      </>
    ))
  ) : (
    <div className="no-element-error">
      <h3>There is no Book in your Megazine, try adding some!</h3>
    </div>
  );

  return (
    <div className="books-container">
      <ul>
        {renderBooks}
      </ul>
      <div className="horizontal-divide" />
      <AddBooks />
    </div>
  );
};

export default Home;
