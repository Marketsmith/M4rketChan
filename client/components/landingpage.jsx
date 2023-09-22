import React, { useState, useEffect } from 'react';
import Searchbar from './searchbar';
import '../components/Styles/HomePage.css';
import ItemCard from './itemCard';
import Slideshow from './slideshow';

const HomePage = () => {
  const [items, setItems] = useState([]);

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

  return (
    <div className='homebody'>
      <Searchbar setItems={setItems} />
      <Slideshow />
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
