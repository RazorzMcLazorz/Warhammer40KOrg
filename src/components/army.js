import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../reducers/actions';

import Nav from './add-ons/navBar';
import Footer from './add-ons/footer';

class Army extends Component {
  render() {
    return (
      <div id='army'>
        <Nav/>
        
        <Footer/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state
}

Army = connect(mapStateToProps, actions)(Army);

export default Army;