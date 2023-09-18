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

