import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {useState, useEffect} from 'react'

const Navigation = () => {

    const navigate = useNavigate()

    const handleClick= (event) => {
        const selectedPage = event.target.value
        navigate(selectedPage); // navigate ('./search')
    }

    return (
        <>
        <label id = 'navBar'>

            <select onChange = {handleClick}>
                <option value = 'navigation'>Navigation</option>
                <option value="./search">Search</option>
                <option value="./favorites">Favorites</option>
                <option value="./listings" >Listing</option>
            </select>

        </label>

        </>
    );
};

export default Navigation;
