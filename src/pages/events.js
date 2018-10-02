import React, { Component } from 'react';
import Page, { Title, Content } from '../objects/page';
import Credits from '../components/credits';
import EventList from '../components/event-list';
import Video from '../objects/video';
import loop from '../assets/loop.mp4';
import './events.css';

export default class Events extends Component {
  render() {
    return(
      <Page id="events">
        <Title>Events</Title>
        <Video src={loop} className="events-page__video-player" />
        <Content id="events">
          <EventList title="Upcoming" filter="upcoming" />
          <EventList title="Past" filter="past" />
          <Credits href="http://edencod.es">
            Flyer Designs by <strong>edencod.es</strong>
          </Credits>
        </Content>
      </Page>
    );
  }
}
