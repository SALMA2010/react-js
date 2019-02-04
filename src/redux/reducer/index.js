
    import { combineReducers } from 'redux';
    import usersReducer from './datareducer';

    export default combineReducers({
        user: usersReducer
    });