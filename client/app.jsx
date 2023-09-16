import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './stylesheets/styles.css';

const App = () => {

    return (
    <>

<Routes>
    <Route
    path="/search"
    element={<Search/>}
    />
    <Route
    path="/results"
    element={<Result />}
    />
    <Route
    path="/details"
    element={<Details />}
    />

</Routes>
</>
    )


};

export default App;