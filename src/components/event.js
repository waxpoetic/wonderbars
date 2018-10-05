import './event.css'

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Image from 'gatsby-image'

export default class Event extends Component {
  static propTypes = {
    facebook_id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    guests: PropTypes.array,
    location: PropTypes.string,
    image: PropTypes.string
  }

  render() {
    const { name, facebook_id, image } = this.props
    const href = `https://www.facebook.com/events/${facebook_id}/`

    return(
      <li className="event">
        <a href={href} target="_blank" rel="noopener noreferer" title={name}>
          <img src={image} className="event__flyer" alt={name} />
        </a>
      </li>
    );
  }
};
