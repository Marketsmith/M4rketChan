import React, { useState, useEffect } from 'react';
import Searchbar from './searchbar';
import '../components/Styles/HomePage.css';
import ItemCard from './itemCard';

const HomePage = ({ isLoggedIn }) => {
  const [items, setItems] = useState([]);
  const [urgentItems, setUrgentItems] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    async function fetchItems() {
      try {
        let response = await fetch('http://localhost:3000/getItems');
        let data = await response.json();
        setItems(data);
      } catch (err) {
        console.error('Fetching items failed: ', err);
      }
    }

    fetchItems();
  }, []);

  useEffect(() => {
    async function fetchUrgentItems() {
      try {
        let response = await fetch('http://localhost:3000/getUrgentItems');
        let data = await response.json();
        setUrgentItems(data);
      } catch (err) {
        console.error('Fetching urgent items failed: ', err);
      }
    }

    fetchUrgentItems();
  }, []);

  const move = (direction) => {
    setCurrentIndex((prev) => (prev + direction + urgentItems.length) % urgentItems.length);
  };

  return (
    <div className='homebody'>
      <Searchbar setItems={setItems} />

      {urgentItems.length ? (
        <div className='carousel'>
          <div className='carousel-items'>
            {urgentItems.map((item, index) => (
              <div
                key={item.id}
                className={`carousel-item ${currentIndex === index ? 'active' : ''}`}
              >
                <img src={item.picture} alt={item.name} />
                <div className='carousel-caption'>{item.name}</div>
              </div>
            ))}
          </div>
          <button className='carousel-prev' onClick={() => move(-1)}>
            &#10094;
          </button>
          <button className='carousel-next' onClick={() => move(1)}>
            &#10095;
          </button>
        </div>
      ) : (
        <p>No urgent items at the moment!</p>
      )}

      <div className='item-container'>
        {items.length > 0 ? (
          items.map((item) => (
            <div className='item-box' key={item.id}>
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
