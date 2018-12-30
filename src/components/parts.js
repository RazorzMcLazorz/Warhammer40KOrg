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
        <div id="skitariiStartCollectingBox">

          <div id="scbShown">
            Skitarii Start Collecting Box
            <img id="scbp" src="./assets/SkitariiStartCollecting.jpg" />
          </div>

          <div id="scbHidden">
            <img className="scbgrid" src="./assets/w40k1.jpg" />
            <img className="scbgrid" src="./assets/w40k2.jpg" />
            <img className="scbgrid" src="./assets/w40k3.jpg" />
            <img className="scbgrid" src="./assets/w40k4.jpg" />
            <img className="scbgrid" src="./assets/w40k5.jpg" />
            <img className="scbgrid" src="./assets/w40k6.jpg" />
            <img className="scbgrid" src="./assets/w40k7.jpg" />
            <img className="scbgrid" src="./assets/w40k8.jpg" />
            <img className="scbgrid" src="./assets/w40k9.jpg" />
            <img className="scbgrid" src="./assets/w40k10.jpg" />
            <img className="scbgrid" src="./assets/w40k11.jpg" />
            <img className="scbgrid" src="./assets/w40k12.jpg" />
            <img className="scbgrid" src="./assets/w40k13.jpg" />
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

Parts = connect(mapStateToProps, actions)(Parts);

export default Parts;