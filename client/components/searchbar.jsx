import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Navigation from "./navigation";
import { DetailsActionCreator } from "../actions/actions.js";
import './styles.css'
import ItemCard from "./itemCard";


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
        {itemsData.map((item) => (
          <div className="item-box">
            <ItemCard picture = {item.picture} description ={item.description} name ={item.name} price = {item.price}>
            </ItemCard>
          </div>
        ))} 
      </div>
    
  );
};

export default Searchbar;