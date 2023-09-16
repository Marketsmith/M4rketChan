import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './styles.css';

import Navigation from './components/navigation'
import Results from './components/results'
import Favorites from './components/favorites'
import Search from './components/search'

const App = () => {

    return (
    <>

<Routes>

    <Route
    path="/"
    element={<Navigation/>}
    />

    <Route
    path="/results"
    element={<Results />}
    />
     <Route
    path="/search"
    element={<Search />}
    />

<Route
    path="/favorites"
    element={<Favorites />}
    />

</Routes>
</>
    )


};

export default App;