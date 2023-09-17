import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './navigation';
import {useState, useEffect} from 'react'

const Listings = () => {

    const [listings, setListings] = useState([]);

    fetch('/listings')
    .then(data => data.json())
    .then(data => setListings(data.items))

    return (
        <>
        <Navigation/>
        <br/>
        <div>Your listings</div>
        <div id='listing container'>
            {listings && listings.map(item=> {
            return (
                <>
                <img src ={`${listings.picture}`} alt = 'loading pic'></img>
                <div>Price: {listings.price}</div>
                <div>Date posted: {listings.date}</div>
                <button type='button'>Delete</button>
                </>
            )})}
        </div>

        <br/>

        </>
    );
};

export default Listings;


// const itemSchema = new Schema({
//     user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
//     name: { type: String, required: true },
//     date: { type: Number, default: Date.now() },
//     description: { type: String, default: '' },
//     city: { type: String, required: true },
//     category: { type: String, required: true },
//     address: { type: String },
//     picture: { type: String },
//     price: { type: Number }
//   });


//   const userSchema = new Schema({
//     username: { type: String, required: true, unique: true },
//     password: { type: String, required: true },
//     email: { type: String },
//     items: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Item' }]
//   });
