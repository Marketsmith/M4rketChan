import React, { useState, useEffect } from 'react';
import Searchbar from './searchbar';
import '../components/Styles/HomePage.css';
import ItemCard from './itemCard';

const HomePage = ({ isLoggedIn }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    function fetchItems() {
      return fetch('http://localhost:3000/getItems')
        .then((data) => {
          console.log('this is the data: ', data);
          return data.json();
        })
        .then((data) => {
          setItems(data);
        })
        .catch((err) => {
          console.error('Fetching items failed: ', err);
        });
    }
    fetchItems();
  }, []);

  return (
    <div className='homebody'>
      <Searchbar setItems={setItems} />
      <div className='item-container'>
        {items.length > 0 ? (
          items.map((item) => (
            <div className='item-box'>
              <ItemCard
                picture={item.picture}
                description={item.description}
                name={item.name}
                price={item.price}
              />
            </div>
          ))
        ) : (
          <p>Nothing to Display</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;
