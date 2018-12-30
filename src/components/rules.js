import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../reducers/actions';

import Nav from './add-ons/navBar';
import Footer from './add-ons/footer';

class Rules extends Component {
  render() {
    return (
      <div id='rules'>
        <Nav/>
        
        <Footer/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state
}

Rules = connect(mapStateToProps, actions)(Rules);

export default Rules;