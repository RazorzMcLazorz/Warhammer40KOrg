import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../reducers/actions';

import Nav from './add-ons/navBar';
import Footer from './add-ons/footer';

class App extends Component {
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

const mapStateToProps = (state) => {
  return state
}

App = connect(mapStateToProps, actions)(App);

export default App;