import { DETAILS } from "../constants/actionTypes";

const initialState = {
  details: [],
};

const sharkreducers = (state = initialState, action) => {
  switch (action.type) {
    case DETAILS: {
      const { name, picture, description, city, price, date} = action.payload;
      const newDetails = [];///...state.details
      newDetails.push(name, picture, description, city, price, date);
      console.log("this is reducer details", newDetails);

      return {
        ...state,
        details: newDetails,
      };
    }

    default:
      return state;
  }
};

export default sharkreducers;
