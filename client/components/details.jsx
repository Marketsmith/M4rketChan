import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Navigation from "./navigation";



const Details = () => {
  const details = useSelector((state) => state.user.details);
  console.log("this is details selector", details);
  //name, picture, description, city, price, date

  return (
    <>
      <Navigation />
      <div className="details">
        <div className="detailsbox">
          <img className = "picturesize" src={details[1]} alt="loading pic"></img>
          <div className="detailsDiv">
            <br/>
            <div>{details[0]}</div>
            <div>Date posted: {details[5]}</div>
            <div>Description: {details[2]} </div>
            <div>City: {details[3]} </div>
            <div>Price: {details[4]} </div>
            <button type="button"> BUY NOW! </button>
          </div>
        </div>
        <div className="detailsbox">
          <div className="reviewbox">
            <div id="reviews">Some reviews by goblin reviewers</div>
            <p>
              {" "}
              "this is the best thing i purchased!!!"" -{" "}
              <strong>fake buyer that never bought anything </strong>{" "}
            </p>
            <p>
              {" "}
              "the price was hard to beat!"" -{" "}
              <strong> buyer was paid to write this </strong>{" "}
            </p>
            <p>
              {" "}
              "not sure if i would come back again" -{" "}
              <strong>buyer came back and bought more things </strong>{" "}
            </p>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Details;
