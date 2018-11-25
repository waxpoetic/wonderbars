import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Page, { Title, Content } from '../objects/page'
import Credits from '../components/credits'
import EventList from '../components/event-list'
import Video from '../objects/video'
import loop from '../assets/loop.mp4'
import './events.css'
import moment from 'moment'

const TODAY = new Date()

export const pageQuery = graphql`
  query {
    allEventsYaml {
      edges {
        node {
          name
          date
          guests
          location
          description
          facebook_id
        }
      }
    }

    allFile(filter: { relativeDirectory: { eq: "events" } }) {
      edges {
        node {
          publicURL
          name
        }
      }
    }
  }
`
export default class Events extends Component {
  get images() {
    return this.props.data.allFile.edges.map(edge => edge.node)
  }

  get events() {
    return this.props.data.allEventsYaml.edges.map(edge => {
      const image = this.images.find(image => {
        return image.name === edge.node.facebook_id.toString()
      })

      if (image) {
        edge.node.image = image.publicURL
      }

      return edge
    })
  }

  get upcomingEvents() {
    return this.events.filter(({ node }) => {
      return moment(node.date).isAfter(TODAY)
    })
  }

  get pastEvents() {
    return this.events.filter(({ node }) => {
      return moment(node.date).isBefore(TODAY)
    }).reverse()
  }

  render() {
    return (
      <Page id="events">
        <Title>Events</Title>
        <Video src={loop} className="events-page__video-player" />
        <Content id="events">
          <EventList title="Upcoming" events={this.upcomingEvents} />
          <EventList title="Past" events={this.pastEvents} />
          <Credits href="#">
            Flyer Designs by <strong>Edie $yborg</strong>
          </Credits>
        </Content>
      </Page>
    )
  }
}
