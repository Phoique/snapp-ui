import React, { Component } from 'react';
import Message from './Message';
import './MessageList.css';

class MessageList extends Component {

  constructor(props) {

    super(props);

    this.state = {

      data: [
        {
          username: 'admin',
          message: 'Hello World'
        },
        {
          username: 'Jake',
          message: 'Hi admin'
        }
      ]

    }

  }

  render() {
    return(
      <div>
        <center>
          <div className="mesajlar">
            <div className="mesaj">
              {
                this.state.data.map(chat => 
                  <Message key={chat.username} username={chat.username} message={chat.message} />
                )
              }
            </div>
          </div>
        </center>
      </div>
    );
  }
}

export default MessageList;