import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './navigation'

const Results = () => {

    return (
        <>

        <Navigation/>
        {/* <Link to='/results'>
    <button type='button'> Search </button>
</Link> */}
        <Searchbar/>


        <div>HELLO THIS IS RESULTS</div>
        <br/>

        </>
    );
};

export default Results;
