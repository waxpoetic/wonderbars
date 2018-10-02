import React, { Component } from 'react';
import { Link } from 'gatsby';
import './header.css';

export default class Header extends Component {
  render() {
    return(
      <header className="header">
        <div className="header__logo animated fadeIn">
          <div className="header__logo-wrapper">
            <p className="header__logo-text animated slideInLeft">
              <Link to="/">The Wonder Bars</Link>
            </p>
          </div>
        </div>
      </header>
    );
  }
}
