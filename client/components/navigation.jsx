import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {useState, useEffect} from 'react'

const Navigation = () => {

    const [page, setPage] = useState('')
    const navigate = useNavigate()

    const handleClick= (e) => {
        const selectedPage = e.target.value;
        console.log('clicked');
        setPage(selectedPage); // Set the state with the selected page
        navigate(page); //
    }

    return (
        <>
        <div id='name'></div>

        <label>
            <div> Navigation
            <select value={page} onChange = {handleClick}>
                <option value="./search">Search</option>
                <option value="./favorites">Favorites</option>
                <option value="./results" >Listing</option>
            </select>
            </div>

        </label>

        </>
    );
};

export default Navigation;
