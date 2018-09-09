import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import { Container } from 'reactstrap'
import {Anna} from './constants/people'
import TypeFrame from './components/typeFrame';
import ChatFrame from './components/chatFrame';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Container>
          <Header name={Anna.name} picture={Anna.picture}></Header>
          <ChatFrame></ChatFrame>
          <TypeFrame></TypeFrame>
        </Container>
      </div>
    );
  }
}

export default App;
