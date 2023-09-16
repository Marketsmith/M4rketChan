import React from 'react';
import { Link } from 'react-router-dom';

const SellItem = () => {
  return (
    <>
      <Link to='/buyItem'>
        <button type='button'> Sell </button>
      </Link>
      <br />
      <Link to='/sellItem'>
        <button type='button'> Sell </button>
      </Link>
      <br />
    </>
  );
};

export default SellItem;
