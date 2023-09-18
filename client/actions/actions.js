import {DETAILS} from '../constants/actionTypes';

export const DetailsActionCreator = (data) => ({
  type: DETAILS,
  payload: data,
});
