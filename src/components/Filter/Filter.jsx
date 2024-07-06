import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterTerm } from '../../redux/products/products.reduser';
import { selectProductsFilterTerm } from '../../redux/products/products.selectors';

const Filter = () => {
  const filterTerm = useSelector(selectProductsFilterTerm);
  const dispatch = useDispatch();
  const onChange = event => {
    dispatch(setFilterTerm(event.target.value));
  };

  return (
    <div>
      <input
        value={filterTerm}
        type="text"
        onChange={onChange}
        placeholder="Enter product name"
      />
    </div>
  );
};

export default Filter;
