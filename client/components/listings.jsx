import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './navigation';

const Listings = () => {

    return (
        <>
        <Navigation/>
        <div>Your listings</div>
        <div id='listing container'>
            {/* <img src ='' alt = 'loading pic'></img> */}
            <div>
                {/* <div>{price}</div>
                <div>{date}</div> */}
            </div>
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
