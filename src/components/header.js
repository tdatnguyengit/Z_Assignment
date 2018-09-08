import React, { Component } from 'react';
import './header.css';

class Header extends Component {
    render() {
        return (
            <div className="header pl15 pt15 pb15">
                <div className='text-center inline-block fit-content text-large'>
                    <img src={'/profilePicture/' + this.props.picture} alt={this.props.name} width='35' height='35' className='rounded-circle'></img>
                    <span className='ml10 font-weight-bold'>
                            {this.props.name}
                    </span>
                </div>
            </div>
        );
    }
}

export default Header;
