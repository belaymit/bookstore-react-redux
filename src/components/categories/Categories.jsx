import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../../redux/categories/categories';
import '../../styles/categories.scss';

const Categories = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.categories);

  const handleStatus = () => dispatch(checkStatus());
  return (
    <section className="categories-section">
      <h1>Categories</h1>
      <p>{status}</p>
      <button
        type="button"
        onClick={handleStatus}
      >
        Check Status
      </button>
    </section>
  );
};

export default Categories;
