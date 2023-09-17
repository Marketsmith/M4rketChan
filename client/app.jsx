import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './styles.css';

import Navigation from './components/navigation'
import Results from './components/results'
import Favorites from './components/favorites'
import Search from './components/search'
import Searchbar from './components/searchbar'

const App = () => {
  return (
    <>

      <Routes>
        <Route path='/search' element={<Search />} />
        <Route path='/results' element={<Result />} />
        <Route path='/details' element={<Details />} />
        <Route path='/sellItem' element={<CreateSellPosting />} />
        <Route path='/' element={<HomePage />} />
        <Route path='/searchbar' element={<Searchbar />} />
      </Routes>
    </>
  );

};

export default App;
