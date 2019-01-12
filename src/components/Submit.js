import React, { Component } from 'react';
import './Submit.css';

class Submit extends Component {
  render() {
    return(
      <div className="gonderici">
        <input className="yolla" type="text"/>
        <input type="submit" value="Gönder" className="gonderbuton" />
      </div>
    );
  }
}

export default Submit;