import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './styles.css';

import Entry from './components/entry';
import Login from './components/Login';
import HomePage from './components/landingpage';
import Results from './components/results';
import Details from './components/details';
import Favorites from './components/favorites';

import CreateSellPosting from './components/createsellpost';
import Listings from './components/listings';
import ImageUploader from './components/imageUploader';
import SignupPage from './components/signupPage';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='signup-page' element={<SignupPage />} />
        <Route path='/login-page' element={<Login />} />
        <Route path='/results' element={<Results />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/sellitem' element={<CreateSellPosting />} />
        <Route path='/listings' element={<Listings />} />
        <Route path='/upload' element={<ImageUploader />} />
        <Route path='/details' element={<Details />} />
      </Routes>
    </div>
  );
};

export default App;
