import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../../styles/card.scss';
import Modal from '../modal/Modal';

const Card = ({ data }) => {
  const [show, setShow] = useState(false);
  const [bookItem, setBookItem] = useState();

  return (
    <>
      {
      // eslint-disable-next-line array-callback-return, consistent-return
      data.map((elem) => {
        const thumbnail = elem.volumeInfo.imageLinks && elem.volumeInfo.imageLinks.smallThumbnail;
        const { publisher } = elem.volumeInfo;
        if (thumbnail !== undefined && publisher !== undefined) {
          return (
            <>
              <div className="card-item" key={elem.id} onClick={() => { setShow(true); setBookItem(elem); }} role="presentation">
                <div className="card-inner">
                  <div className="card-top">
                    <img src={thumbnail} alt="book" />
                  </div>
                  <div className="card-bottom">
                    <div className="card-info">
                      <h4>{elem.volumeInfo.title}</h4>
                      <p className="publisher">
                        Publisher:
                        {' '}
                        {publisher}
                      </p>
                      <span className="publish-date">
                        Publish Date:
                        {' '}
                        {elem.volumeInfo.publishedDate}
                      </span>
                      <p className="pages">
                        Pages:
                        {' '}
                        {elem.volumeInfo.pageCount}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <Modal data={show} item={bookItem} onClose={() => setShow(false)} />
            </>
          );
        }
      })
     }
    </>
  );
};

Card.propTypes = {
  data: PropTypes.oneOfType([
    PropTypes.arrayOf,
  ]).isRequired,

};
export default Card;
