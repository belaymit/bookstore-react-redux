import React from 'react';
import { GrClose } from 'react-icons/gr';
import PropTypes from 'prop-types';
import '../../styles/modal.scss';

const Modal = ({ data, item, onClose }) => {
  if (!data) {
    return null;
  }
  const thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
  return (
    <>
      <div className="modal-pop-up">
        <div className="card-inner">
          <button className="close-btn" type="button" onClick={onClose}>
            <GrClose />
          </button>
          <div className="inner-box">
            <img src={thumbnail} alt="" />
            <div className="info">
              <h2>{item.volumeInfo.title}</h2>
              <h3>{item.volumeInfo.authors}</h3>
              <h5>
                {item.volumeInfo.publisher}
                :
                {' '}
                <span>{item.volumeInfo.publishedDate}</span>
              </h5>
              <br />
              <a href={item.volumeInfo.previewLink}><button type="button">More</button></a>
            </div>
          </div>
          <h4 className="description">
            {item.volumeInfo.description}
          </h4>
        </div>
      </div>
    </>
  );
};

Modal.propTypes = {
  data: PropTypes.oneOfType([
    PropTypes.bool,
  ]).isRequired,

  item: PropTypes.oneOfType([
    PropTypes.object,
  ]).isRequired,

  onClose: PropTypes.oneOfType([
    PropTypes.bool,
  ]).isRequired,

};

export default Modal;
