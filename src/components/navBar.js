import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends Component {
  render() {
    return (
      <div id='nav'>
        <Link  to="/" to="/">
          Home
        </Link>
        <Link  to="/">
          Army
        </Link>
        <Link  to="/">
          Parts
        </Link>
        <Link  to="/">
          Rules
        </Link>
        <Link  to="/">
          Lore
        </Link>
      </div>
    );
  }
}
