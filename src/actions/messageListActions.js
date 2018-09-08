import * as types from '../constants/actionTypes';

/**
 * Add message list action
 * @param {string[]} msgList 
 * @package {object} creator
 * @returns {object} action object
 */
export function addMessageList(msgList, creator) {
    return {
        type: types.ADD_MESSAGE_LIST,
        msgList,
        creator,
    }
}