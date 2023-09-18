import React from "react";
import { Link, Redirect } from "react-router-dom";
import { useNavigate } from "react-router";
import { CLOUDINARY_CONSTS } from "../constants/actionTypes";

const HomePage = ({ isLoggedIn }) => {
  //const navigate = useNavigate();
  // if(!isLoggedIn) {
  //   navigate ('/signup')

  // }

  return (
    <div className="homebody">
      <div>
        <h2>Welcome to the Goblin Market</h2>
      </div>
      <div>
        <h3>Buy or sell goods in your city</h3>
      </div>
      <div >
      <Link to="/searchBar" style={{ textDecoration: 'none' }}>
        <button className="homebuttons" type="button"> Buy </button>
      </Link>
      <Link to="/sellItem" style={{ textDecoration: 'none' }}>
        <button className="homebuttons" type="button"> Sell </button>
      </Link>
      <br />
      <br />
      </div>
    </div>
    
  );
};

export default HomePage;
