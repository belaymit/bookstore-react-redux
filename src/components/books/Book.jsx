import React from 'react';
import { BsTrash } from 'react-icons/bs';
import { CircularProgressbar } from 'react-circular-progressbar';
import { MdEdit } from 'react-icons/md';
import { CiEdit } from 'react-icons/ci';
import '../../styles/books.scss';
import 'react-circular-progressbar/dist/styles.css';

const Book = () => (
  <div className="book-container">
    <div className="book-info">
      <div className="book-description">
        <h5>Category</h5>
        <h2>Title</h2>
        <h4>Author</h4>
      </div>
      <div className="action-btn">
        <button type="button">
          <CiEdit />
          Comments
        </button>
        <div className="separator" />
        <button type="button">
          <BsTrash />
          Remove
        </button>
        <div className="separator" />
        <button type="button">
          <MdEdit />
          Edit
        </button>
      </div>
    </div>
    <div className="progress">
      <div className="progress-bar">
        <CircularProgressbar value={70} strokeWidth={5} />
      </div>
      <div className="progress-description">
        <p className="percent-complete">70%</p>
        <p className="completed">Completed</p>
      </div>
      <div className="progress-divider" />
      <div className="chapter-container">
        <p>Current Chapter</p>
        <h4>Chapter 17</h4>
        <button type="submit">UPDATE PROGRESS</button>
      </div>
    </div>
  </div>
);

export default Book;
