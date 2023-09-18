//This is the page that lets you create a post for an item to sell

import React, { useState } from "react";
import Navigation from "./navigation";

const CreateSellPosting = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedCity, setSelectedCity] = useState("");


  return (
    <div>
      <Navigation />
      <h3>Post an item for sale</h3>
      <form method="POST" action="/sellItem">
        <br />
        <br />
        <input name="name" type="text" placeholder="item name"></input>
        <br />
        <br />
        <input name="date" type="text" placeholder="date"></input>
        <br />
        <br />
        <input
          name="description"
          type="text"
          placeholder="item description"
        ></input>
        <br />
        <br />
        <label>Category: </label>
        <select
          name="category"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">Select a category </option>
          <option value="electronics">Electronics</option>
          <option value="clothing">Clothing</option>
          <option value="furniture">Furniture</option>
          {/* Add more category options as needed */}
        </select>
        <br />
        <br />
        <label>City: </label>
        <select
          name="city"
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
        >
          <option value="">Select a city</option>
          <option value="new-york">New York</option>
          <option value="los-angeles">Los Angeles</option>
          <option value="chicago">Chicago</option>
          {/* Add more city options as needed */}
        </select>
        <br />
        <br />
        <span>Upload a photo of the item</span>
        <br />
        <br />
        <input type="file" id="myFile" name="picture" onChange={handleChange} />

        <br />
        <input type="submit" name="_method" value="Post the item for sale" />
      </form>
    </div>
  );
};

export default CreateSellPosting;
