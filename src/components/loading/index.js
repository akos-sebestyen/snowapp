import React, { Component } from 'react';
import logo from '../../logo.svg';
import './index.css';

class App extends Component {
  render() {
    return (
      <div className='spinner-div'>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
  }
}

export default App;
