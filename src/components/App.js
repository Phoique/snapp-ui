import React, { Component } from 'react';
import MessageList from './chat/MessageList';
import Submit from './submit/Submit';
import './App.css';


class App extends Component {
  render() {
    return (
      <div>
        <MessageList />
        <Submit />
      </div>
    );
  }
}

export default App;
