import React, { Component } from 'react'
import { Link } from 'gatsby'
import Navigation from './navigation'
import './header.css'

export default class Header extends Component {
  render() {
    return(
      <header className="header">
        <div className="header__navigation">
          <Navigation />
        </div>
        <div className="header__logo animated fadeIn">
          <p className="header__logo-text animated slideInLeft">
            <Link to="/">The Wonder Bars</Link>
          </p>
        </div>
      </header>
    );
  }
}
