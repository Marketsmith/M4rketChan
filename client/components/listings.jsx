import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './navigation';
import {useState, useEffect} from 'react'
import { useSelector } from 'react-redux';

const Listings = () => {

    // const [listings, setListings] = useState([]);

    // const username = useSelector((state)=>state.user.username);
    // const password = useSelector((state)=>state.user.password);

    // fetch('/listings', {
    //     method: 'POST',
    //     body: JSON.stringify({
    //         username: username,
    //         password: password,
    //     }),
    //     headers: {
    //         'Content-Type': 'Application/JSON'
    //       },
    // })
    // .then(data => data.json())
    // .then(data => setListings(data.items))

    return (
        <>
        <Navigation/>
        <br/>
        <div>Your listings</div>
        {/* <div id='listing-container'>
            {listings && listings.map(item=> {
            return (
                <div className = 'listingpage'>
                <img src ={`${listings.picture}`} alt = 'loading pic'></img>
                <div>Price: {listings.price}</div>
                <div>Date posted: {listings.date}</div>
                <button id ='delete button' type='button'>Delete</button>
                </div>
            )})}
        </div> */}

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
