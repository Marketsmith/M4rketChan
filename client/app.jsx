import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './styles.css';

import Navigation from './components/navigation'
import Results from './components/results'
import Favorites from './components/favorites'
import Search from './components/search'
import HomePage from './components/landingpage'
import CreateSellPosting from './components/createsellpost'

import Searchbar from './components/searchbar'
import Login from './components/Login'

import Details from './components/details'
import Listings from './components/listings'
import ImageUploader from './components/imageUploader';



const App = () => {
  return (
    <>

      <Routes>
        {/* <Route path='/' element={<Navigation />} /> */}

        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/search' element={<Search />} />
        <Route path='/results' element={<Results />} />
        <Route path='/details' element={<Details />} />
        <Route path='/searchbar' element={<Searchbar />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/sellitem' element={<CreateSellPosting />} />
        <Route path='/listings' element={<Listings />} />
        <Route path='/upload' element={<ImageUploader />} />
      </Routes>
    </>
  );

};

export default App;
