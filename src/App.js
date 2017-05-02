import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ContentRow from './components/contentRow';
import Loading from './components/loading';
import Dropdown from './components/dropdown';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mountainData: {

      },
      mountainList: ['cypress-mountain', 'whistler-blackcomb'],
      selectedMountain: 'cypress-mountain'
    };
  }
  componentWillMount() {
    fetch('/api/cypress-mountain')
      .then(res => res.json())
      .then(data => {
        this.setState({ mountainData: data });
      });
  }
  dropdownChanged(event) {
    let mountain = event.target.value;
    fetch(`/api/${mountain}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          mountainData: data,
          selectedMountain: mountain
        });
      });
    // this.setState({ selectedMountain: event.target.value });
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Dis a weather app</h2>
          <h3>{this.state.mountainData.name}</h3>
        </div>
        <Dropdown selected={this.state.selectedMountain}
          options={this.state.mountainList}
          onChange={this.dropdownChanged.bind(this)}
        />
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
