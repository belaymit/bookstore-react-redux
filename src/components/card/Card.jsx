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
        return (
          <div className="card-item" key={elem.id}>
            <div className="card-inner">
              <div className="card-top">
                <img src="https://josipmisko.com/img/books/The-Road-to-React.jpg" alt="react" />
              </div>
              <div className="card-bottom">
                <div className="card-info">
                  <h4>Intro to React</h4>
                  <p>Lorem ipsum dolor sit amet.</p>
                  <span>Mega Publishing</span>
                  <p>Pages: 360</p>
                </div>
              </div>
            </div>
          </div>
        );
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
