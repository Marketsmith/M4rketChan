import * as actions from '../actions/actions.js';


const initialState = {

}


const sharkreducers = (state = initialState, action) => {

  switch (action.type) {

      case [PLACEHOLDER]:{


      return {
        ...state,

      }
    }

    default:
      return state;
  }
};

export default sharkreducers;
