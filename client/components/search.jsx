import React from 'react';
import { Link } from 'react-router-dom';

const Search = () => {

    const handleclick = async (e) => {


    }

    return (
        <>
        <Navigation/>
         <Link to='/details' >
                <button type='button'> Details </button>
        </Link><br/>
        </>
    );
};

export default Search;
