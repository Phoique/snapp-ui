import React, { Component } from 'react';
import './Message.css';

class Message extends Component {
  render() {
    return(
      <div>

        <div className="kullanici">
          kullanıcı1
        </div>
        <div className="ileti">
          Selam
        </div>
        <div className="kullanici">
          kullanıcı1
        </div>
        <div className="ileti">
          Selam
        </div>
        
      </div>
    );
  }
}

export default Message;