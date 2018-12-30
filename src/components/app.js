import React, { Component } from 'react';
import Nav from './navBar';

export default class App extends Component {
  render() {
    return (
      <div id='app'>
        <Nav/>
        <div id="title">
          Warhammer 40,000 2018 EDITION
        </div>
      </div>
    );
  }
}
