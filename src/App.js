import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DataBlock from './components/dataBlock';

class App extends Component {
  render() {
    const data = [9, 10, 9];
    const times = ['AM', 'PM', 'ON'];
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Dis a weather app</h2>
        </div>
        <DataBlock type={'temp'} data={data} times={times}>
          TEST!
        </DataBlock>
      </div>
    );
  }
}

export default App;
