import React, { Component } from 'react';
import Message from './Message';
import './MessageList.css';

class MessageList extends Component {
  render() {
    return(
      <div>
        <center>
          <div className="mesajlar">
            <div className="mesaj">
              <Message />
            </div>
          </div>
        </center>
      </div>
      
    );
  }
}

export default MessageList;