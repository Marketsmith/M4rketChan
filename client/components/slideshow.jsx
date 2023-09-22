import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import '../components/Styles/Slideshow.css';
import { useDispatch } from 'react-redux';
import { DETAILS } from '../constants/actionTypes';

const Slideshow = () => {
  const [newItems, SetNewItems] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const messageRedirect = async (item) => {
    const itemDetails = {
      name: item.name,
      picture: item.picture,
      description: item.description,
      price: item.price,
      city: item.city,
      date: item.date,
    };

    dispatch({ type: DETAILS, payload: itemDetails });

    const reviewAndBid = item.name;

    const response = await fetch('http://localhost:3000/getReviewAndBid', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reviewAndBid),
    });

    navigate('../details');
  };

  useEffect(() => {
    async function fetchNewItems() {
      try {
        let response = await fetch('http://localhost:3000/getNewItems');
        let data = await response.json();
        SetNewItems(data);
      } catch (err) {
        console.error('Fetching new items failed: ', err);
      }
    }

    fetchNewItems();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      move(1);
    }, 3000);

    return () => clearInterval(timer);
  }, [newItems, currentIndex]);

  const move = (direction) => {
    setCurrentIndex((prev) => (prev + direction + newItems.length) % newItems.length);
  };
  const transform = `translateX(-${currentIndex * 100}%)`;

  return (
    <div>
      {newItems.length ? (
        <div className='slideshow'>
          <div className='slideshow-text'>New Listings!</div>
          <div className='slide-items' style={{ transform }}>
            {newItems.map((item) => (
              <div key={item.id} className='slide-item' onClick={() => messageRedirect(item)}>
                {item.picture ? <img src={item.picture} /> : null}
                <div className='slide-caption'>{item.name}</div>
              </div>
            ))}
          </div>
          <button className='slide-prev' onClick={() => move(-1)}>
            &#10094;
          </button>
          <button className='slide-next' onClick={() => move(1)}>
            &#10095;
          </button>
        </div>
      ) : (
        <p>No new items at the moment!</p>
      )}
    </div>
  );
};
export default Slideshow;
