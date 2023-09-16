import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './stylesheets/styles.css';

import search from './search'
import SellItem from './components/landingpage';
const App = () => {
  return (
    <>
      <Routes>
        <Route path='/search' element={<Search />} />
        <Route path='/results' element={<Result />} />
        <Route path='/details' element={<Details />} />
        <Route path='/sellItem' element={<CreateSellPosting />} />
        <Route path='/' element={<HomePage />} />
      </Routes>
    </>
  );
};

export default App;
