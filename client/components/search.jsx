

import React from 'react';
import { Link } from 'react-router-dom';

import Searchbar from './searchbar.jsx'
import Navigation from './navigation';




const Search = () => {

   return (
        <>
       <Navigation/>
       {/* <Container> */}
         <Link to='/results'>
            <button type='button'> Search </button>
      </Link>
        {/* </Container> */}

       <Searchbar/>

        </>
   );
};


export default Search;
