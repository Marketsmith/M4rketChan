import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Navigation from "./navigation";
import { DetailsActionCreator } from "../actions/actions.js";

const Searchbar = () => {
  const dispatch = useDispatch();
  //array of items and cities that we can modify
  //items/categories and cities here should match the ones we use in our database just for simplicity
  const cities = ["los-angeles", "new-york", "chicago"];
  const items = ["furniture", "electronics", "clothing"];

  const [selectedItem, setSelectedItem] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  //state to store data from server response
  const [itemsData, setItemsData] = useState([]);

  const handleDetails = (item) => {
    const action = DetailsActionCreator(item);
    dispatch(action);
  };
  const handleItemChange = (event) => {
    setSelectedItem(event.target.value);
    console.log(selectedItem);
    //unsure how to view what state currently is even though when updated it shows as blank in browser
  };

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
    console.log(selectedCity);
  };

  const handleSearch = () => {
    //object with selectedItem and selectedCity to send as post request within fetch to backend
    const searchData = {
      selectedItem,
      selectedCity,
    };
    //fetch post request to itemsByCity route to retrieve queried data
    fetch("http://localhost:3000/itemsByCity", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(searchData), // Convert data to JSON, must be sent as object like we did here
    })
      .then((data) => data.json())
      .then((parsedData) => {
        console.log("this is the data:", parsedData);
        //updated itemData state with fetched data
        setItemsData(parsedData);
      })
      .catch((error) => {
        console.log("Error retrieving data:", error);
      });
  };


  //trigger useEffect whenever itemsData state changes by including it as dependency
  useEffect(() => {}, [itemsData]);

 
    return (
        <>
        <Navigation />
        <br/>
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

        {/* Display itemsData on stateChange */}
        {/* Supposed to need a key when you are mappping a component in your component file. 
        For example, if i were to map the nav bar within this map function i would need a unique key that i could set to its index */}
        {itemsData.map((item, index) => (
            <div className="item-box">
                {/* update what we want to show here exactly is it the photo? */}
                <h2>{item.name}</h2>
                <img src ={item.picture} alt= 'loading pic'></img>
                <p>description: {item.description}</p>
                <p>price: {item.price}</p>
            </div>

        ))}
      </select>
      <select value={selectedCity} onChange={handleCityChange}>
        <option value="">Select a city</option>
        {cities.map((city, index) => (
          <option key={index} value={city}>
            {" "}
            {city}{" "}
          </option>
        ))}
      </select>
      <button onClick={handleSearch}>Search</button>

      {/* Display itemsData on stateChange */}
      {/* Supposed to need a key when you are mappping a component in your component file.
        For example, if i were to map the nav bar within this map function i would need a unique key that i could set to its index */}
      {itemsData.map((item, index) => (
        <div className="item-box">
          {/* update what we want to show here exactly is it the photo? */}
          <h2>{item.name}</h2>
          <Link to="/details">
            <img
              src={item.picture}
              alt="loading pic"
              onClick={() => handleDetails(item)}
            ></img>
          </Link>
          <p hidden> {item.description}</p>
          <p hidden> {item.city}</p>
          <p>{item.price}</p>
        </div>
      ))}
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
{
  /* <select value={selectedItem} onChange={handleItemChange}>
            </select> */
}
{
  /* <select onChange = {handleClick}>
            <option value = 'navigation'>Navigation</option>
            {item && item.map(item => {
                <options value ={item}>{item}</options>})}
             </select>
             <select onChange = {handleClick}>
            {city && item.map(city => {
                <options value ={city}>{city}</options>})}
                 </select>
            <input type="text" placeholder='Choose a item'></input>
                        <input type="text" placeholder='Choose a city'></input> */
}
