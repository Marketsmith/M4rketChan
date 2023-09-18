// import React from "react";
// import { Link, Redirect } from "react-router-dom";
// import { useNavigate } from "react-router";
// import HomePage from "./landingpage";
// import Login from "./Login";
// import { useState, useEffect } from "react";

// const Entry = () => {

//   const [isLoggedin, setisLoggedin] = useState();

//   useEffect(() => {
//     fetch("/api/home", {
//       method: "GET",
//       headers: {
//         "Content-type": "application/json",
//       },
//     })
//       .then((data) => data.json())
//       .then((data) => {
//         console.log("data", data);

//         setisLoggedin(data);
//       })
//       .catch((err) => console.log("fetch errorrrr"));
//   }, []);

//   return (
//     <>
//       {isLoggedin && isLoggedin === true && <Login />}
//       {isLoggedin && isLoggedin === false && <HomePage />}

//     </>
//   );
// };

// export default Entry;
