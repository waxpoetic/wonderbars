import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Page, { Title } from '../objects/page'
import Video from '../objects/video'

import './index.css'
import loop from '../assets/loop.mp4'

export const pageQuery = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

export default class Home extends Component {
  render() {
    const { site: { siteMetadata: { title, description } } } = this.props.data

    return(
      <Page id="home">
        <Video src={loop} className="home-page__video-player" />
        <Title className="home-page__title animated zoomIn" pageTitle={title}>
          {description}
        </Title>
      </Page>
    );
  }
}
