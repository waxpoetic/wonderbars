import React, { Component } from 'react';
import Page, { Title } from '../objects/page';
import Video from '../objects/video';

import './index.css';
import loop from '../assets/loop.mp4';

export default class Home extends Component {
  render() {
    return(
      <Page id="home">
        <Video src={loop} className="home-page__video-player" />
        <Title className="home-page__title animated zoomIn">
          Live House Music from Philadelphia
        </Title>
      </Page>
    );
  }
}
