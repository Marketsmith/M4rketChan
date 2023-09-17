//This is the page that lets you create a post for an item to sell

import React, { useState } from 'react';
import Navigation from './navigation'

    const CreateSellPosting = () => {
    // const [showPopup, setShowPopup] = useState(false);
    // debugger
    const popUpContent = (
        <div>
            <h2>Success!</h2>
            <p>Your item has been posted for sale.</p>
            <button onClick = {()=>setShowPopup(false)}>Close</button>
        </div>
    );
    // const handleClick = async (e) => {
    //     e.preventDefault();

    //     //logic
    //     setShowPopup(true);
    // }
  return (
      <div>
        <Navigation />
      <h3>Post an item for sale</h3>
      <form method='POST' action='/sellItem'>
        <input
          name='user'
          type='text'
          placeholder='user name'
        ></input>
        <input
          name='name'
          type='text'
          placeholder='Item name'
        ></input>
        <input
          name='date'
          type='text'
          placeholder='date'
        ></input>
        <input
          name='description'
          type='text'
          placeholder='Item description'
        ></input>
        <span>Upload a photo of the item</span>
        <input type='file' id='myFile' name='picture' />
        <input type="submit"></input>
        <input type='submit' name='_method' value='Post the item for sale' />
      </form>
    {/* {showPopup && (
        <div>
            {popUpContent};
        </div>
    )} */}
    </div>
  );
};

export default CreateSellPosting;
