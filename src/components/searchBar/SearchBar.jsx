import React from 'react';
import { FaSearch } from 'react-icons/fa';
import PropTypes from 'prop-types';
import '../../styles/searchBar.scss';

const SearchBar = (props) => {
  const { value, onChange, onKeyPress } = props;
  console.log(value);
  return (
    <div className="search-container">
      <div className="container">
        <div className="search-form-content">
          <form className="search-form">
            <div className="search-form-elem">
              <input
                type="text"
                className="form-control"
                placeholder="The Lost World..."
                value={value}
                onChange={onChange}
                onKeyPress={onKeyPress}
              />
              <button type="submit" className="form-submit-btn">
                <FaSearch className="search-icon" size={32} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

SearchBar.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
  ]).isRequired,
  onChange: PropTypes.oneOfType([
    PropTypes.func,
  ]).isRequired,
  onKeyPress: PropTypes.oneOfType([
    PropTypes.func,
  ]).isRequired,
};
export default SearchBar;
