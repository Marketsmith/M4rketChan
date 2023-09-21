import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Navigation from './navigation';
import { DetailsActionCreator } from '../actions/actions.js';
import '../components/Styles/SearchBar.css';

const Searchbar = ({ setItems }) => {
  const dispatch = useDispatch();
  //array of items and cities that we can modify
  //items/categories and cities here should match the ones we use in our database just for simplicity
  const cities = ['los-angeles', 'new-york', 'chicago'];
  const categories = ['furniture', 'electronics', 'clothing'];

  const [selectedItem, setSelectedItem] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  //state to store data from server responses

  const handleDetails = (item) => {
    const action = DetailsActionCreator(item);
    dispatch(action);
  };
  const handleItemChange = (event) => {
    setSelectedItem(event.target.value);
  };

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  const handleSearch = () => {
    //object with selectedItem and selectedCity to send as post request within fetch to backend
    const searchData = {
      selectedItem,
      selectedCity,
    };
    //fetch post request to itemsByCity route to retrieve queried data
    fetch('http://localhost:3000/itemsByCity', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(searchData), // Convert data to JSON, must be sent as object like we did here
    })
      .then((data) => data.json())
      .then((parsedData) => {
        //updated itemData state with fetched data
        setItems(parsedData);
      })
      .catch((error) => {
        console.log('Error retrieving data:', error);
      });
  };

  return (
    <div className='searchbody'>
      <Navigation />
      <br />
      <select className='categories' value={selectedItem} onChange={handleItemChange}>
        <option value=''>Select a Category</option>
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
      <select className='locations' value={selectedCity} onChange={handleCityChange}>
        <option value=''>Select a city</option>
        {cities.map((city, index) => (
          <option key={index} value={city}>
            {city}
          </option>
        ))}
      </select>
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default Searchbar;
