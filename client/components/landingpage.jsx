import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
      <div>
        <h2>Welcome to the Goblin Market</h2>
      </div>
      <div>
        <h3>Choose an option below</h3>
      </div>
      <Link to='/search'>
        <button type='button'> Buy </button>
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
