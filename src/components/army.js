import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../reducers/actions';

import Nav from './add-ons/navBar';
import Footer from './add-ons/footer';


class Army extends Component {
  state = {
    round: 0
  }


  Timer () {
    this.setState({ round: this.state.round + 1});
    this.state.round === 12 ?
    this.setState({ round: 'Game Over' }):
    ''
  }

  render() {
    return (
      <div id='army'>
        <Nav/>
        <div onClick={() => this.Timer()}>
          {this.state.round}
        </div>
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