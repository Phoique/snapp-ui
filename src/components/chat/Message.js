import React, { Component } from 'react';
import './Message.css';

class Message extends Component {
  render() {
    return(
      <div>
        <div className="kullanici">
          {this.props.username}
        </div>
        <div className="ileti">
          {this.props.message}
        </div>
      </div>
    );
  }
}

export default Message;