import './music.css'
import loop from '../assets/contact.mp4'

import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Page, { Title, Content } from '../objects/page'
import Video from '../objects/video'
import Release from '../components/release'

export const pageQuery = graphql`
  query {
    allReleasesYaml {
      edges {
        node {
          name
          description
          spotify_url
          genius_url
          tracks
          catalog_number
        }
      }
    }

    allFile(filter: { relativeDirectory: { eq: "releases" } }) {
      edges {
        node {
          publicURL
          name
        }
      }
    }
  }
`

export default class Music extends Component {
  get releases() {
    const { allReleasesYaml, allFile } = this.props.data
    const releases = allReleasesYaml.edges.map(edge => edge.node)
    const images = allFile.edges.map(edge => edge.node)

    return releases.map(release => {
      const { catalog_number } = release
      const cover = images.find(image => {
        if (catalog_number) {
          return image.name === catalog_number
        } else {
          return false
        }
      })

      return <Release key={catalog_number} {...release} cover={cover} />
    })
  }

  render() {
    return (
      <Page id="music">
        <Video src={loop} className="music-page__video-player" />
        <Title>Music</Title>
        <Content>{this.releases}</Content>
      </Page>
    )
  }
}
