import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../reducers/actions';

import Nav from './add-ons/navBar';
import Footer from './add-ons/footer';

class Parts extends Component {
  render() {
    return (
      <div id='parts'>
        <Nav/>
        
        <Footer/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state
}

Parts = connect(mapStateToProps, actions)(Parts);

export default Parts;