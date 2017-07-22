import React, { Component } from 'react';
import './App.css';
import WeatherCard from './weather-card';

const prettyTitle = function (titlestring) {
  var splitStr = titlestring.toLowerCase().split('-');
  return splitStr.map(function (i) { return i.charAt(0).toUpperCase() + i.substring(1); }).join(' ');
}


// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mountainList: ['whistler-blackcomb',
        'apex',
        'big-white',
        'cypress-mountain',
        'fernie',
        'kicking-horse',
        'manning-park-resort',
        'mount-washington',
        'silver-star',
        'sun-peaks',
        'revelstoke'],
      activeMountains: ['cypress-mountain']
    };
  }
  componentWillMount() {
  }
  addCard(num) {
    if (this.state.activeMountains.length === 0 ||
      this.state.activeMountains.findIndex(elem => elem === this.state.mountainList[num]) === -1) {
      this.setState({ activeMountains: this.state.activeMountains.concat(this.state.mountainList[num]) });
    }
  }
  delCard() {
    this.setState({ activeMountains: [] });
  }
  navClick = () => {
    let navMenu = document.getElementsByClassName('menu')[0];
    let isMouseDown = false;
    navMenu.classList.toggle('open');
    navMenu.focus();
    navMenu.addEventListener('mousedown', function () {
      isMouseDown = true;
    });

    navMenu.addEventListener('mouseup', function () {
      isMouseDown = false;
    });

    navMenu.addEventListener('mouseleave', function () {
      isMouseDown = false;
    });

    navMenu.addEventListener('blur', function () {
      if (!isMouseDown) {
        navMenu.classList.remove('open');
      }
    }, true);

  }
  debounce = (e) => {
    if (e.target.classList.contains('add-button')) { return; }
    let navMenu = document.getElementsByClassName('menu')[0];
    if (!!navMenu && navMenu.classList.contains('open')) {
      navMenu.classList.remove('open');
    }
  }
  render() {
    return (
      <div className="App" onClick={this.debounce}>
        <header className="app-header">
          <ul className='top-level-menu'>
            <li className='add-button' onClick={this.navClick}>Add
            <ul className='menu'>
                {this.state.mountainList.map((mtn, i) =>
                  <a key={mtn+i} onClick={this.addCard.bind(this, i)}><li>{prettyTitle(mtn)}</li></a>
                )}
                <a onClick={this.delCard.bind(this)}><li>Remove all</li></a>
              </ul>
            </li>
          </ul>
          <div>🏂Snow App</div>
        </header>
        <div className='content'>
          {this.state.activeMountains.length > 0 && this.state.activeMountains.map((mtn) =>
            <WeatherCard key={mtn} apiRoute={mtn} />
          )}
        </div>


      </div>
    );
  }
}

export default App;
