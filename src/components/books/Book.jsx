import React from 'react';
import PropTypes from 'prop-types';
import progress from '../../assets/progress.png';
import '../../styles/books.css';

const Book = (props) => {
  const { data } = props;
  return (
    <li key={data.id} className="book">
      <div className="book-content">
        <div className="book-info">
          <h4>{data.category}</h4>
          <h2>{data.title}</h2>
          <h6>{data.author}</h6>
          <div className="action-buttons">
            <button type="button" className="comment">Comments</button>
            <div className="vertical-divider" />
            <button
              type="button"
            >
              Remove
            </button>
            <div className="vertical-divider" />
            <button type="button" className="edit">Edit</button>
          </div>
        </div>
        <div className="book-progress">
          <div className="progress-bar">
            <img src={progress} alt="progress" />
          </div>
          <div className="progress-info">
            <p className="percent-complete">64%</p>
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
    </li>
  );
};

Book.propTypes = {
  data: PropTypes.oneOfType([
    PropTypes.object,
  ]).isRequired,
};

export default Book;
