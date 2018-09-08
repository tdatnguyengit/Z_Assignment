import { combineReducers } from 'redux';
import messageListReducer from './messageListReducer';

const rootReducer = combineReducers({
    messageList: messageListReducer
});

export default rootReducer;