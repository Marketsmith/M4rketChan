import React from 'react';
import { Link } from 'react-router-dom';
import {useState, useEffect} from 'react'

const Searchbar = () => {

   
  
    // const arr [category...]


    //get fetch request on some endpoint that grabs mongodb (backend)
    //json data
    //

    //[array of categories]
    //[array of cities]
    
    const [item, setItem] = useState('')
    const [city, setCity] = useState('')
    const [click, setClick] = useState(true)

    useEffect(()=>{
    fetch('/items')
    .then(data=>data.json())
    .then(data => setItem(data.item))
    }, [click])

    item = [car, house, eletronics]

    const handleClick = (e) => {
        if (e.target.value === 'navigation') {
            click === true ? setClick(false) : setClick(true)
        }
        
    }

    return (
        <>
            {/* <select value={selectedItem} onChange={handleItemChange}>
            </select> */}

            <select onChange = {handleClick}> 
            <option value = 'navigation'>Navigation</option>
            {item && item.map(item => {
                <options value ={item}>{item}</options>})}
             </select>
             <select onChange = {handleClick}> 
            {city && item.map(city => {
                <options value ={city}>{city}</options>})}
                 </select>


            <input type="text" placeholder='Choose a item'></input>
            <input type="text" placeholder='Choose a city'></input>
        </>
    );
};

export default Searchbar;