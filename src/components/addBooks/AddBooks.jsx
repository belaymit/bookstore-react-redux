import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBooks } from '../../redux/books/books';
import '../../styles/addBooks.scss';

const getDataFromLocalStorage = () => {
  const data = localStorage.getItem('books');
  if (data) {
    return JSON.parse(data);
  }
  return [];
};
const AddBooks = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [author, setAuthor] = useState('');
  const [books, setBooks] = useState(getDataFromLocalStorage());
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const booksCollection = {
      id: uuidv4(),
      title,
      category,
      author,
    };
    setBooks([...books, booksCollection]);
    dispatch(addBooks(books));
    setTitle('');
    setCategory('');
    setAuthor('');
  };

  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books));
  }, [books]);

  return (
    <div className="add-book-container">
      <h2>Add New Book</h2>
      <form action="" className="add-book-form" onSubmit={handleSubmit}>
        <input
          className="title-input"
          type="text"
          placeholder="Input Book"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          className="author-input"
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
        <select className="category-input" onChange={(e) => setCategory(e.target.value)}>
          <option value="Programming">Programming</option>
          <option value="Education">Education</option>
          <option value="Politics">Politics</option>
          <option value="Geography">Geography</option>
          <option value="Fiction">Geography</option>
          <option value="Adventure stories">Geography</option>
          <option value="Fairy tales">Geography</option>
          <option value="Humour and satire">Geography</option>
        </select>
        <button type="submit" className="btn-submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBooks;
