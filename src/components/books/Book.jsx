import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import PropTypes from 'prop-types';
import '../../styles/books.scss';
import 'react-circular-progressbar/dist/styles.css';

const Book = (props) => {
  const { data } = props;
  return (
    <div className="book-container">
      <div className="book-info">
        <div className="book-description">
          <h5>{data.category}</h5>
          <h2>{data.title}</h2>
          <h4>{data.author}</h4>
        </div>
        <div className="action-btn">
          <button type="button">
            Comments
          </button>
          <div className="separator" />
          <button type="button">
            Remove
          </button>
          <div className="separator" />
          <button type="button">
            Edit
          </button>
        </div>
      </div>
      <div className="progress">
        <div className="progress-bar">
          <CircularProgressbar value={70} strokeWidth={10} />
        </div>
        <div className="progress-description">
          <p className="percent-complete">70%</p>
          <p className="completed">Completed</p>
        </div>
        <div className="progress-divider" />
        <div className="chapter-container">
          <p>Current Chapter</p>
          <h4>Chapter 17</h4>
          <button type="submit" className="btn-submit">UPDATE PROGRESS</button>
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  data: PropTypes.oneOfType([
    PropTypes.object,
  ]).isRequired,
};

export default Book;
