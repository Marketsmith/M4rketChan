// import * as types from '../constants/actionTypes';

export const LOGINActionCreator = data => ({
    type: types.LOGIN_INFO,
    payload: [data.username, data.password]
});
