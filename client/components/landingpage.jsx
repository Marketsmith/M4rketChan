import React from "react";
import { Link, Redirect } from "react-router-dom";
import { useNavigate } from "react-router";

const HomePage = ({ isLoggedIn }) => {
  //const navigate = useNavigate();
  // if(!isLoggedIn) {
  //   navigate ('/signup')

  // }

  return (
    <>
      <div>
        <h2>Welcome to the Goblin Market</h2>
      </div>
      <div>
        <h3>Choose an option below</h3>
      </div>
      <Link to="/searchBar">
        <button type="button"> Buy </button>
      </Link>
      <br />
      <br />
      <Link to="/sellItem">
        <button type="button"> Sell </button>
      </Link>
      <br />
      <br />
    </>
  );
};

export default HomePage;
