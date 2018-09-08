import React, { Component } from 'react';
import './messageGroup.css'

class MessageBlock extends Component {
    render() {
        return (
            <div className={this.props.isMe ? 'message-me' : 'message-friend'}>
                {this.props.value}
            </div>
        );
    }
}

class MessageGroup extends Component {
    render() {
        return (
            <div className='message-group'>
                {
                    this.props.msgList.map(u=>
                        (
                            <MessageBlock value={u} isMe={this.props.creator.isMe} />
                        )
                    )
                }
            </div>
        );
    }
}

export default MessageGroup;