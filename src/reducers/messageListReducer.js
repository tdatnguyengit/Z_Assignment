import * as types from '../constants/actionTypes'
import * as people from '../constants/people'

const initialState = [{
    msgList: ['Hello! Cant I have you?'],
    creator: people.Anna
}];

export default function todos(state = initialState, action) {
    switch (action.type) {
        case types.ADD_MESSAGE_LIST:

            return state.concat([{
                msgList: action.msgList,
                creator: action.creator
            }])
        default:
            return state;
    }
}
