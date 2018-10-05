import './event-list.css';

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Event from './event'

export default class EventList extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    events: PropTypes.array.isRequired
  }

  get events() {
    const { events } = this.props

    return events.map(({ node }) => <Event key={node.name} {...node} />)
  }

  render() {
    const { title } = this.props;

    return(
      <section className="events-page__list">
        <h3>{title}</h3>
        <ul className="event-list">
          {this.events}
        </ul>
      </section>
    );
  }
}
