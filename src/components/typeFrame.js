import React, { Component } from 'react';
import './typeFrame.css'
import { connect } from 'react-redux';
import * as messageListActions from '../actions/messageListActions';
import { Me } from '../constants/people';
import splitMessage from '../utils/splitMessage';

class TypeFrame extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msgValue: ''
        }
    }

    submitMessage() {
        if (this.state.msgValue) {
            var splitMsg = [];
            try {
                splitMsg = splitMessage(this.state.msgValue);
            }
            catch (e) {
                splitMsg = ['ERROR: ' + e];
            }
            this.props.addMessageList(splitMsg, Me);
            this.setState({ msgValue: '' });
        }
    }

    render() {
        return (
            <div className='type-frame'>
                <div className='pl20 pr20 pt20 pb20'>
                    <div className='pl10 pr10 pt5 pb5 chat-wrapper'>
                        <input
                            className='pl5 pr5 pt5 pb5 chat-input d-inline'
                            placeholder='Message'
                            onChange={(event) => { this.setState({ msgValue: event.target.value }) }}
                            onKeyPress={(event) => { if (event.key === 'Enter') this.submitMessage() }}
                            value={this.state.msgValue}>
                        </input>
                        <div className='d-inline send-btn' onClick={() => this.submitMessage()}>Send</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(null, messageListActions)(TypeFrame);
