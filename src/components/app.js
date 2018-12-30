import React, { Component } from 'react';

import Nav from './navBar';
import Footer from './footer';

export default class App extends Component {
  render() {
    return (
      <div id='app'>
        <Nav/>
        <div id="title">
          <div id="titleEd">
            Warhammer 40,000 2018 EDITION
          </div>
          <div>
            <img id="titlePic" src="./assets/40KTitle.jpg"></img>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}
