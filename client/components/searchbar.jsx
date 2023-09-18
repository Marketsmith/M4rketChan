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
    <div className="searchbody">
      <Navigation />
      <br />
      <select className="option" value={selectedItem} onChange={handleItemChange}>
        <option value="">Select an item</option>
        {items.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
      <select className="option" value={selectedCity} onChange={handleCityChange}>
        <option value="">Select a city</option>
        {cities.map((city, index) => (
          <option key={index} value={city}>
            {" "}
            {city}{" "}
          </option>
        ))}
      </select>
      <button onClick={handleSearch}>Search</button>
      <div className="items">
        {/* Display itemsData on stateChange */}
        {/* Supposed to need a key when you are mappping a component in your component file.
          For example, if i were to map the nav bar within this map function i would need a unique key that i could set to its index */}
        {itemsData.map((item, index) => (
          <div className="item-box">
            {/* update what we want to show here exactly is it the photo? */}
            <h2>{item.name}</h2> <br />
            <Link to="/details">
            <img className = 'picturesize' src={item.picture} alt="loading pic" onClick={() => handleDetails(item)}></img>
            </Link>
            <br />
            <p>description: {item.description}</p> <br />
            <p>price: {item.price}</p> 
          </div>
        ))}
      </div>
    </div>
  );
};

export default Searchbar;