

import React from 'react';
import { Link } from 'react-router-dom';

import Searchbar from './searchbar.jsx'

import Navigation from './navigation';



const Container = styled.div `display: flex; flex-direction: row;`


const Container = styled.div `display: flex; flex-direction: row;`


const Search = () => {

   return (
        <>
       <Navigation/>
       <Container>
         <Link to='/results'>
            <button type='button'> Search </button>
      </Link>
        </Container>
        </>
   );
};

    return (
        <>
        <div>HELLO THIS IS SEARCH</div>
        <Navigation/>

        <Searchbar/>

        {/* <Container> */}
        <input placeholder=''></input>
        <Link to='/results'>
            <button type='button'> Search </button>
        </Link>
        {/* </Container> */}

        </>
    );
};

// export default Search;
