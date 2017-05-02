import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ContentRow from './components/contentRow';
import Loading from './components/loading';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mountainData: {

      },
      mountainList: [ 'cypress-mountain', 'whistler-blackcomb']
    };
  }
  componentWillMount() {
    fetch('/api/cypress-mountain')
      .then(res => {console.log(res); return res.json();})
      .then(data => {
        console.log('back from Fetch!' + data);
        this.setState({ mountainData: data });
      });
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Dis a weather app</h2>
          <h3>{this.state.mountainData.name}</h3>
        </div>
        {
          this.state.mountainData.days
          ?
          this.state.mountainData.days.map((dayData, index) => {
            return dayData.times ? <ContentRow key={dayData.name + index} data={dayData} /> : null;
          })
          :
          <Loading />
        }
      </div>
    );
  }
}

export default App;
