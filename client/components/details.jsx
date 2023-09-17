import React from 'react';
import { Link } from 'react-router-dom';

const Details = (props) => {

    return (
        <>
        <img src='url' alt='loading pic'></img>
        <div>Date posted: {props.date}</div>
        <div>Description: {props.description}</div>
        <div>City: {props.city} </div>
        <div>Address: {props.address} </div>
        <div>Price: {props.price} </div>
        </>
    );
};

export default Details;

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