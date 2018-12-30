import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../reducers/actions';

import Nav from './add-ons/navBar';
import Footer from './add-ons/footer';

class Lore extends Component {
  render() {
    return (
      <div id='lore'>
        <Nav/>
        
        <Footer/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state
}

Lore = connect(mapStateToProps, actions)(Lore);

export default Lore;