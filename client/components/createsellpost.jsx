import React from 'react';

const CreateSellPosting = () => {
  return (
      <div>
        <Navigation />
      <h3>Post an item for sale</h3>
      <form method='POST' action='/sellItem'>
        <input
          name='itemname'
          type='text'
          placeholder='Item name'
        ></input>
        <input
          name='itemdescription'
          type='text'
          placeholder='Describe the item'
        ></input>
        <input
          name='price'
          type='text'
          placeholder='Listing price'
        ></input>
        <span>Upload a photo of the item</span>
        <input type='file' id='myFile' name='filename' />
        <input type='submit' name='_method' value='Post the item for sale' />
      </form>
    </div>
  );
};

export default CreateSellPosting;
