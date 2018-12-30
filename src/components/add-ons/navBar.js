import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends Component {
  render() {
    return (
      <div id='nav'>
        <Link  to="/" className="tab">
          Home
        </Link>
        <Link  to="/Army" className="tab">
          Army
        </Link>
        <Link  to="/Parts" className="tab">
          Parts
        </Link>
        <Link  to="/Rules" className="tab">
          Rules
        </Link>
        <Link  to="/Lore" className="tab">
          Lore
        </Link>
      </div>
    );
  }
}
