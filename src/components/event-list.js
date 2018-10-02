import './event-list.css';

import React, { Component } from 'react'
import { map } from 'lodash'
import PropTypes from 'prop-types'
import Mindbrain from 'mindbrain'
import config from '../../package.json'
import Event from './event'

export default class EventList extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    filter: PropTypes.string.isRequired,
    children: PropTypes.any.isRequired
  }

  state = { events: [] }
  mindbrain = new Mindbrain(config)

  get events() {
    let { events } = this.state;
    return map(events, params => <Event {...params} key={params.id} />);
  }

  componentWillMount() {
    let { filter } = this.props

    this.mindbrain.get(`events/${filter}`)
                    .then(events => this.setState({ events }))
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
