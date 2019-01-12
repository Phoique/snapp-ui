import React, { Component } from 'react';
import './Submit.css';

class Submit extends Component {

  constructor(props) {
    super(props);

    this.sendMessage = this.sendMessage.bind(this);

    this.state = {
      writeMessage: ''
    }

  }

  sendMessage(event) {
    this.setState({writeMessage: event.target.value});
  }

  render() {
    return(
      <div className="gonderici">
      <form>
        <input className="yolla" type="text" onChange={this.sendMessage}/>
        <input type="submit" value="Gönder" className="gonderbuton" />
      </form>
      </div>
    );
  }
}

export default Submit;