import * as types from '../action/type';
const initialState = {
    data: null,
    isLoading: false
};
export default function(state = initialState, action) {
    switch (action.type) {
        case types.USER_LOGGING_IN:
            return {
                ...state,
                isLoading: true
            }
        case types.USER_LOGGED_IN:
            return {
                data: action.payload,
                isLoading: false
            }
        default:
            return state
    }
};