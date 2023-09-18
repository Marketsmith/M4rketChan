import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Details = () => {
  const details = useSelector((state) => state.user.details);
  console.log("this is details selector", details);
  //name, picture, description, city, price, date

  return (
    <>
      <div>Name: {details[0]}</div>
      <img src={details[1]} alt="loading pic"></img>
      <div>Date posted: {details[5]}</div>
      <div>Description: {details[2]}</div>
      <div>City: {details[3]} </div>
      <div>Price: {details[4]} </div>
      <button type="button"> BUY NOW! </button>
    </>
  );
};

export default Details;
