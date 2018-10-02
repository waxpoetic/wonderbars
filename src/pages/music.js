import './music.css'
import loop from '../assets/contact.mp4'

import React, { Component } from 'react'
import Page, { Title, Content } from '../objects/page'
import Video from '../objects/video'
import Release from '../components/release'
import config from '../../package.json'

export default class Music extends Component {
  render() {
    return(
      <Page id="music">
        <Video src={loop} className="music-page__video-player" />
        <Title>Music</Title>
        <Content>
          <p>coming soon</p>
        </Content>
      </Page>
    )
  }
}
