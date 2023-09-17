import React from 'react';
import { Link } from 'react-router-dom';
import {useState, useEffect} from 'react'

const Searchbar = () => {

//array of items and cities that we can modify 
//items/categories and cities here should match the ones we use in our database just for simplicity 
const cities = ['Los Angeles', 'Seattle'];
const items = ['furniture', 'electronics'];
        
const [selectedItem, setSelectedItem] = useState('');
const [selectedCity, setSelectedCity] = useState('');

const handleItemChange = (event) => {
    setSelectedItem(event.target.value);
  };

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  const handleSearch = () => {

    // Implement fetch logic here based on selectedItem and selectedCity
    // Make a GET request to the backend to retrieve the data test routes?? can't connect to mnogo for now
    // Update state?? and lead into rerendering of data component? where pictures and links are
  };

    return (
        <>
        
        <select value={selectedItem} onChange={handleItemChange}>
          <option value="">Select an item</option>
            {items.map((item, index) => (
          <option key={index} value={item}>{item}</option>))}
        </select>

        <select value={selectedCity} onChange={handleCityChange}>
          <option value="">Select a city</option>
            {cities.map((city, index) => (
          <option key={index} value={city}> {city} </option>))}
        </select>

        <button onClick={handleSearch}>Search</button>
            
        </>
    );
};

export default Searchbar;


    //get fetch request on some endpoint that grabs mongodb (backend)
    //json data
    //[array of categories]
    //[array of cities]
        // const [item, setItem] = useState([])
    // const [city, setCity] = useState([])
    // const [click, setClick] = useState(true)

    // useEffect(() => {
    // fetch('http://localhost:3000/items')
    //   .then(data => data.json())
    //   .then(data => {
    //     setItem(data.item)}, [click])


    //   });

    // const handleClick = (e) => {
    //     if (e.target.value === 'navigation') {
    //         click === true ? setClick(false) : setClick(true)
    //     }
        
    // }


                {/* <select value={selectedItem} onChange={handleItemChange}>
            </select> */}
            {/* <select onChange = {handleClick}> 
            <option value = 'navigation'>Navigation</option>
            {item && item.map(item => {
                <options value ={item}>{item}</options>})}
             </select>
             <select onChange = {handleClick}> 
            {city && item.map(city => {
                <options value ={city}>{city}</options>})}
                 </select>
            <input type="text" placeholder='Choose a item'></input>
            <input type="text" placeholder='Choose a city'></input> */}