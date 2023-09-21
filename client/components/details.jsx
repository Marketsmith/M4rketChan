import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Navigation from "./navigation";

import useUserStore from '../zuStore';

const Details = () => {
  const details = useSelector((state) => state.user.details);
  const [bidState, setBidState] = useState('');
  //name, picture, description, city, price, date

  function submitBid() {
    fetch('http://localhost:3000/placeBid', {
      method: 'POST',
      body: JSON.stringify({
        amount: bidState,
        itemName: 'Insert Item Name Here'
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((data) => data.json())
      .then((data) => {
        if (data.success) {
          alert(data.message);
        } else {
          alert(data.message);
        }
      })
      .catch((err) => {
        console.error('Fetching users failed: ', err);
      });
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'bid') {
      setBidState(value);
    }
  };
  const { zuUsername } = useUserStore();

  // check milestone 100 points 
  // add item to user array
  // increase xp 50 points 
  // fetch POST to userController 
  // getUser GET  

  const body = {
    username : zuUsername,
    details : details[0]
 }

  const handleBuyButton = async () => {
    const response = await fetch('http://localhost:3000/buyItem', {
      method : 'POST',
      headers : {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
    // if response is successful then update XP 
    
  }

  return (
    <>
    <Navigation />
    <div className="details">
      {details.map((item, index) => (
        <div className="detailsbox" key={index}>
          <img className="picturesize" src={item.picture} alt="loading pic" />
          <div className="detailsDiv">
            <br />
            <div>{details[0]}</div>
            <div>Date posted: {details[5]}</div>
            <div>Description: {details[2]} </div>
            <div>City: {details[3]} </div>
            <div id='buy-it-now'>
              <div>Price: {details[4]} </div>
              <button type="button"> Buy it now. </button>
            </div>
            <div>Highest Bid: Insert bid data here</div>
            <form onSubmit={submitBid}>
              <input name="bid" type="text" value={bidState} placeholder="Make your bid!" onChange={handleInputChange}></input>
              <button type="submit">Submit Bid</button>
            </form>
          </div>
        </div>
      ))}
      <div className="detailsbox">
        <div className="reviewbox">
          <div id="reviews">Some reviews by goblin reviewers</div>
          <p>
            {" "}
            "this is the best thing I purchased!!!" -{" "}
            <strong>fake buyer that never bought anything </strong>{" "}
          </p>
          <p>
            {" "}
            "the price was hard to beat!!" -{" "}
            <strong> buyer was paid to write this </strong>{" "}
          </p>
          <p>
            {" "}
            "not sure if I would come back again" -{" "}
            <strong>buyer came back and bought more things </strong>{" "}
          </p>
        </div>
      </div>
    </div>
  </>
  );
};

export default Details;
