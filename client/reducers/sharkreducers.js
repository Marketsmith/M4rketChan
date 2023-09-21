import { DETAILS } from "../constants/actionTypes";

const initialState = {
  details: [],
};

const sharkreducers = (state = initialState, action) => {
  switch (action.type) {
    case DETAILS: {
      const { name, picture, description, city, price, date} = action.payload;
      const newItemDetails = {
        name,
        picture,
        description,
        city,
        price,
        date,
      };
      const updatedDetails = [...state.details, newItemDetails];

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
