import React, { Component } from 'react';
import './App.css';
import WeatherCard from './weather-card';
import TutorialCard from './tutorial-card';
import Modal from './components/modal';
import localforage from 'localforage';

const prettyTitle = function (titlestring) {
  var splitStr = titlestring.toLowerCase().split('-');
  return splitStr.map(function (i) { return i.charAt(0).toUpperCase() + i.substring(1); }).join(' ');
}


// Close the dropdown menu if the user clicks outside of it
// window.onclick = function (event) {
//   if (!event.target.matches('.dropbtn')) {

//     var dropdowns = document.getElementsByClassName("dropdown-content");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//       }
//     }
//   }
// }

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
      activeMountains: [],
      popup: ''
    };
  }
  componentWillMount() {
    let that = this;
    localforage.getItem('activeMountains').then(function (value) {
      console.log('cachedMountains', value);
      if (!!value) { that.setState({ activeMountains: value }); }
    }).catch(function (err) {
      console.log(err);
    });
  }
  addCard(num) {
    if (this.state.activeMountains.length === 0 ||
      this.state.activeMountains.findIndex(elem => elem === this.state.mountainList[num]) === -1) {
      localforage.setItem('activeMountains', this.state.activeMountains.concat(this.state.mountainList[num]))
        .then(function (value) {
          console.log("mountainsCached", value);
        }).catch(function (err) {
          console.log(err);
        });
      this.setState({ activeMountains: this.state.activeMountains.concat(this.state.mountainList[num]) });
    }
  }
  displayPopup(url){
    this.setState({popup: url});
  }
  closePopup(){
    this.setState({popup: ''});
  }
  // delCard() {
  //   localforage.removeItem('activeMountains').then(function () {
  //     console.log('Key is cleared!');
  //   }).catch(function (err) {
  //     console.log(err);
  //   });
  //   this.setState({ activeMountains: [] });
  // }
  delCard(card) {
    const cardIndex = this.state.activeMountains.findIndex(mtn => mtn === card);
    var newState = this.state.activeMountains.slice();
    newState.splice(cardIndex, 1);
    this.setState({ activeMountains: newState }, function () {
      localforage.setItem('activeMountains', this.state.activeMountains)
        .then(function (value) {
          console.log("mountainsCached", value);
        }).catch(function (err) {
          console.log(err);
        });
    });
  }
  navClick = () => {
    console.log('clicked!');
    let navMenu = document.getElementsByClassName('menu')[0];
    let addButton = document.getElementsByClassName('add-button')[0];
    let isMouseDown = false;
    navMenu.classList.toggle('open');
    addButton.classList.toggle('tilt');
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
        addButton.classList.remove('tilt');
      }
    }, true);

  }
  debounce = (e) => {
    if (e.target.classList.contains('add-button')) { return; }
    let navMenu = document.getElementsByClassName('menu')[0];
    let addButton = document.getElementsByClassName('menu')[0];
    if (!!navMenu && navMenu.classList.contains('open')) {
      navMenu.classList.remove('open');
    }
    if (!!addButton && addButton.classList.contains('tilt')) {
      addButton.classList.remove('tilt');
    }
  }
  render() {
    return (
      <div className="App" onClick={this.debounce}>
        <header className="app-header">
          <i className='icon-plus-circled add-button' onClick={this.navClick}></i>
          <div>🏂 Powder Day</div>
        </header>
        <ul className='menu'>
          {this.state.mountainList.map((mtn, i) =>
            <li key={mtn + i} onClick={this.addCard.bind(this, i)}><div>{prettyTitle(mtn)}</div></li>
          )}
        </ul>
        <div className='content'>
          {this.state.activeMountains.length > 0 && this.state.activeMountains.map((mtn) =>
            <WeatherCard key={mtn} apiRoute={mtn} deleteCard={this.delCard.bind(this, mtn)} openPopup={this.displayPopup.bind(this)}/>
          )}
          {
            this.state.activeMountains.length === 0 &&
            <TutorialCard />
          }
        </div>
        <a href='mailto:hungmle38@gmail.com' className='email-link'>💌</a>
        {this.state.popup && <Modal imgUrl={this.state.popup} closeFunc={this.closePopup.bind(this)}/>}
      </div>
    );
  }
}

export default App;
