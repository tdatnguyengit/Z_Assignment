import React, { Component } from 'react';
import './chatFrame.css'
import MessageGroup from './messageGroup';
import { connect } from 'react-redux';

class ChatFrame extends Component {
    render() {
        return (
            <div className='chat-frame' ref={e=>this.chatFrame = e}>
                {
                    this.props.messageList.map((u,i) => (
                        <MessageGroup key={i} msgList={u.msgList} creator={u.creator} />
                    ))
                }
            </div>
        );
    }

    componentDidUpdate () {
        this.chatFrame.scrollTop = this.chatFrame.scrollHeight;
      }
}

function mapStateToProps(state) {
    return {
        messageList: state.messageList
    }
}

export default connect(mapStateToProps)(ChatFrame);
