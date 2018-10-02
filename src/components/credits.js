import './credits.css'

import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Credits extends Component {
  static propTypes = {
    href: PropTypes.string.isRequired,
    children: PropTypes.any.isRequired
  };

  render() {
    const { href, children } = this.props;

    return(
      <p className="credits">
        <a href={href} title="who made this?">{children}</a>
      </p>
    )
  }
}
