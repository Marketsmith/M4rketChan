import React from 'react';
// import { SELL_BUTTON } from '../constants/actionTypes';
// import { BUY_BUTTON } from '../constants/actionTypes';
import { useDispatch } from 'react-redux';
import { sellButtonActionCreator } from '../actions/actions';

const sellItemCreator = () => {

    const handleClickSell = (input) => {
        const action = sellButtonActionCreator(input);

    }

    const handleClickBuy = () => {
        const input = document.querySelector('#buyButton').value;
        const action = sellButtonActionCreator(input);

    }

    return (
        <div className='sellItemCreator'>
            <div>Sell an item</div>
            <button onClick= {()=> handleClickSell()}>Sell</button>
        </div>
    )
};

export default sellItemCreator;