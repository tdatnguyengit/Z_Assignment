import { combineReducers } from 'redux';
import messageListReducer from './messageListReducer';

const rootReducer = combineReducers({
    messageListReducer
});

export default rootReducer;