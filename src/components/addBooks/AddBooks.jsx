import React from 'react';
import '../../styles/addBooks.scss';

const AddBooks = () => (
  <div className="add-book-container">
    <h2>Add New Book</h2>
    <form action="" className="add-book-form">
      <input
        className="title-input"
        type="text"
        placeholder="Input Book"
        value="Title"
        required
      />
      <input
        className="author-input"
        type="text"
        placeholder="Author"
        value="Author"
        required
      />
      <select className="category-input">
        <option value="Programming">Programming</option>
        <option value="Education">Education</option>
        <option value="Politics">Politics</option>
        <option value="Geography">Geography</option>
      </select>
      <button type="submit" className="btn-submit">Add Book</button>
    </form>
  </div>
);

export default AddBooks;
