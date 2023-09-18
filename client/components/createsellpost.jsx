//This is the page that lets you create a post for an item to sell

import React, { useState } from "react";
import Navigation from "./navigation";
import ImageUploader from './imageUploader'

const CreateSellPosting = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [url, setUrl] = useState('');

  console.log('url:', url);
  console.log('cat:', selectedCategory);
  console.log('city:', selectedCity);

  return (
    <div>
      <Navigation />
      <h3>Post an item for sale</h3>

      <form method="POST" action="/sellItem">
        <input name="name" type="text" placeholder="item name" />
        <br />
        <br />

        <input name="date" type="text" placeholder="date" />
        <br />
        <br />

        <input name="description" type="text" placeholder="item description" />
        <br />
        <br />
        <label>Category: </label>
        <select
          name="category"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">Select a category</option>
          <option value="electronics">Electronics</option>
          <option value="clothing">Clothing</option>
          <option value="furniture">Furniture</option>
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
        </select>
        <br />
        <br />

        <span>Upload a photo of the item</span>
        <br />
        <br />
        {/* <input type="file" id="myFile" name="picture" /> */}

        <ImageUploader 
          setUrl={setUrl}
          url={url}
        />
        <br />

        <input name="picture" value={url} readOnly></input>
        <input type="submit" name="_method" value="Post the item for sale" />
      </form>
    </div>
  );
};

export default CreateSellPosting;
