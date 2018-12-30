import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends Component {
  render() {
    return (
      <div id='nav'>
        <Link  to="/" className="tab">
          Home
        </Link>
        <Link  to="/" className="tab">
          Army
        </Link>
        <Link  to="/" className="tab">
          Parts
        </Link>
        <Link  to="/" className="tab">
          Rules
        </Link>
        <Link  to="/" className="tab">
          Lore
        </Link>
      </div>
    );
  }
}
