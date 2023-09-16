import * as types from '../constants/actionTypes';

export const sellButtonActionCreator = totalSellPosts => ({
    type: types.SELL_BUTTON,
    payload: totalSellPosts
});
