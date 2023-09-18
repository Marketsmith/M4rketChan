import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './styles.css';

import Entry from './components/entry'
import Login from './components/Login'
import HomePage from './components/landingpage'
import Results from './components/results'
import Details from './components/details'
import Favorites from './components/favorites'

import CreateSellPosting from './components/createsellpost'
import Listings from './components/listings'
import ImageUploader from './components/imageUploader';

const App = () => {
  return (
    <>

      <Routes>
        {/* <Route path='/' element={<Entry />} /> */}
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/results' element={<Results />} />
        <Route path='/details' element={<Details />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/sellitem' element={<CreateSellPosting />} />
        <Route path='/listings' element={<Listings />} />
        <Route path='/upload' element={<ImageUploader />} />
      </Routes>
    </>
  );

};

export default App;
