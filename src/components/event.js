import './event.css'

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Image from 'gatsby-image'

export default class Event extends Component {
  static propTypes = {
    facebook_id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    guests: PropTypes.array,
    location: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }

  render() {
    const {
      name, facebook_id, image,
      description, location, date,
      cover, price
    } = this.props
    const href = `https://www.facebook.com/events/${facebook_id}/`

    return(
      <li className="event">
        <div className="event__flyer">
          <a href={href} rel="noopener noreferer" title={name}>
            <img src={image} className="event__image" alt={name} />
          </a>
        </div>
        <div className="event__info">
          <p>{description}</p>
          <dl className="event__metadata">
            <dt>Where:</dt>
            <dd>{location}</dd>
            <dt>When:</dt>
            <dd>{date}</dd>
          </dl>
        </div>
      </li>
    );
  }
};
