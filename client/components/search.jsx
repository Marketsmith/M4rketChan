

import React from 'react';
import { Link } from 'react-router-dom';

import Searchbar from './searchbar.jsx'
import Navigation from './navigation';


//not sure if we need a results page as i can try to rerender the search page within searchbar 
//within componenet in order to display results upon the search button click

const Search = () => {

   return (
        <>
       <Navigation/>
       <Link to='/results'>
    <button type='button'> Search </button>
</Link>
       <Searchbar/>
        </>
   );
};


export default Search;
