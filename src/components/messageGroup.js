import React, { Component } from 'react';
import './messageGroup.css'

class MessageGroup extends Component {
    render() {
        return (
            <div className={this.props.creator.isMe ? 'message-group-me' : 'message-group-friend'}>
                {
                    this.props.msgList.map((u, i) =>
                        (
                            <div key={i} className='message'>
                                {u}
                            </div>
                        )
                    )
                }
            </div>
        );
    }
}

export default MessageGroup;