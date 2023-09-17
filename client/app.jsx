import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './styles.css';

import Navigation from './components/navigation'
import Results from './components/results'
import Favorites from './components/favorites'
import Search from './components/search'
import Details from './components/details'
import Listings from './components/listings'


const App = () => {
  return (
    <>

      <Routes>
        <Route path='/' element={<Navigation />} />
        <Route path='/search' element={<Search />} />
        <Route path='/results' element={<Results />} />
        <Route path='/details' element={<Details />} />
        <Route path='/favorites' element={<Favorites />} />
        {/* <Route path='/sellItem' element={<CreateSellPosting />} /> */}
        <Route path='/listings' element={<Listings />} />
      </Routes>
    </>
  );

};

export default App;
