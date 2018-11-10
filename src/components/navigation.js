import React, { Component } from 'react'
import { Link } from 'gatsby'
import './navigation.css'
import HamburgerButton from 'react-icons/lib/md/format-align-justify'

export default class Navigation extends Component {
  constructor(props) {
    super(props)
    this.state = { status: 'closed', visible: false }
  }

  close(event) {
    event.preventDefault()
    this.reset()
  }

  open(event) {
    event.preventDefault()
    this.setState({ status: 'open', visible: true })
  }

  refresh() {
    this.reset()
  }

  reset() {
    this.setState({ status: 'closed' })
  }

  get className() {
    return `animated navigation navigation--${this.state.status}`
  }

  get style() {
    if (!this.state.visible) {
      return { display: 'none' }
    } else {
      return {}
    }
  }

  render() {
    const open = this.open.bind(this)
    const close = this.close.bind(this)
    const refresh = this.refresh.bind(this)

    return [
      <div className="navigation__hamburger-button" key="button">
        <a href="#navigation" onClick={open}>
          <HamburgerButton />
        </a>
      </div>,
      <div
        className={this.className}
        id="navigation"
        key="menu"
        style={this.style}
      >
        <nav>
          <Link className="navigation__link" to="/" onClick={refresh}>
            home
          </Link>
          <Link className="navigation__link" to="/music" onClick={refresh}>
            music
          </Link>
          <Link className="navigation__link" to="/events" onClick={refresh}>
            events
          </Link>
          <Link className="navigation__link" to="/contact" onClick={refresh}>
            contact
          </Link>
        </nav>
        <a href="#close" className="navigation__close-button" onClick={close}>
          &times;
        </a>
      </div>,
    ]
  }
}
