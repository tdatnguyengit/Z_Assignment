import React, { Component } from 'react';
import { Container, Input, Button } from 'reactstrap'
import './typeFrame.css'

class TypeFrame extends Component {
    render() {
        return (
            <div className='type-frame'>
                <div className='pl20 pr20 pt20 pb20'>
                    <div className='pl10 pr10 pt5 pb5 chat-wrapper'>
                        <input className='pl5 pr5 pt5 pb5 chat-input d-inline' placeholder='Message'></input>
                        <div className='d-inline send-btn'>Send</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TypeFrame;
