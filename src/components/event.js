import './event.css'

import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Event extends Component {
  static propTypes = {
    facebook_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }

  state = { image: null }

  async componentDidMount() {
    const { facebook_id } = this.props;
    const image = await import(`../assets/wonderlust/${facebook_id}.png`);

    this.setState({ image });
  }

  render() {
    const { title, facebook_id } = this.props;
    const { image } = this.state;
    const href = `https://www.facebook.com/events/${facebook_id}/`;

    return(
      <li className="event">
        <a href={href} target="_blank" rel="noopener noreferer" title={title}>
          {image && <img src={image} className="event__flyer" alt={title} />}
        </a>
      </li>
    );
  }
};
