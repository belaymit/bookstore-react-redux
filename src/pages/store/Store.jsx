import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../../components/card/Card';
import SearchBar from '../../components/searchBar/SearchBar';
import '../../styles/store.scss';

const Store = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const searchTerm = 'react';
  const fetchBooks = () => {
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=AIzaSyDE6u8RF_l9AmtcjOGfP0KPhfARf_W4Mwk&maxResults=20`)
      .then((res) => setData(res.data.items))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  const onKeyPress = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="store-container">
        <div className="store-header">
          <div className="store-wrapper">
            <h2 className="title">Find Books</h2>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Est, quisquam tempore? Fuga non quam iste earum, ex quasi
              laudantium ipsam impedit, recusandae consectetur modi officiis
              deserunt vero consequatur eaque nobis.
            </p>
            <SearchBar value={search} onChange={onChange} onKeyPress={onKeyPress} />
          </div>
        </div>
      </section>
      <section className="books-in-store-section">
        <div className="all-books-in-store">
          <Card data={data} />
        </div>
      </section>
    </>
  );
};

export default Store;
