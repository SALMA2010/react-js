import * as types from '../action/type';
export const setUserDetails = (data) => dispatch => {
    dispatch({
        type: types.USER_LOGGING_IN
    });

    dispatch({
        type: types.USER_LOGGED_IN,
        payload: data
    })
};