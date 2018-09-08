import React, { Component } from 'react';
import './chatFrame.css'
import MessageGroup from './messageGroup';
import { Me, Anna } from '../constants/people';

class ChatFrame extends Component {
    render() {
        return (
            <div className='chat-frame'>
               <MessageGroup msgList={['Dat Dat','Hello']} creator={Me}/>
               <MessageGroup msgList={['Dat Dat','Hello']} creator={Anna}/>
            </div>
        );
    }
}

export default ChatFrame;
