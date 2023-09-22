import { DETAILS } from '../constants/actionTypes';

const initialState = {
  details: [],
};

const sharkreducers = (state = initialState, action) => {
  switch (action.type) {
    case DETAILS: {
      const { name, picture, description, city, price, date, currentBid } = action.payload;
      const newItemDetails = {
        name,
        picture,
        description,
        city,
        price,
        date,
        currentBid,
      };
      const updatedDetails = [newItemDetails];

      return {
        ...state,
        details: updatedDetails,
      };
    }

    default:
      return state;
  }
};

export default sharkreducers;
