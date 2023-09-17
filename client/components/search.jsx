

import React from 'react';
import { Link } from 'react-router-dom';

import Searchbar from './searchbar.jsx'
import Navigation from './navigation';

// const Container = styled.div `display: flex; flex-direction: row;`


const Search = () => {

   return (
        <>
       <Navigation/>
       <Searchbar/>
        </>
   );
};



export default Search;
