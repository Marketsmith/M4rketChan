import React from 'react';
import { Link } from 'react-router-dom';

const Search = () => {

    

    return (
        <>
        <Navigation/>

         <Link to='/results' >
                <button type='button'> Search </button>
        </Link>
        <br/>

        </>
    );
};

export default Search;
