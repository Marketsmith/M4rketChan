import React from "react";
import { useSelector } from "react-redux";
import Navigation from "./navigation";

import useUserStore from '../zuStore';

const Details = () => {
  const details = useSelector((state) => state.user.details);
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
            <div>Name : {item.name}</div>
            <div>Date posted: {item.date}</div>
            <div>Description: {item.description}</div>
            <div>City: {item.city}</div>
            <div>Price: {item.price}</div>
            <button type="button" onClick={handleBuyButton}>
              BUY NOW!
            </button>
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
