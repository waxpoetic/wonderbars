import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Navigation from './navigation'
import './header.css'

export default class Header extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  }

  render() {
    const { title } = this.props

    return (
      <header className="header">
        <div className="header__navigation">
          <Navigation />
        </div>
        <div className="header__logo animated fadeIn">
          <p className="header__logo-text animated slideInLeft">
            <Link to="/">{title}</Link>
          </p>
        </div>
      </header>
    )
  }
}
