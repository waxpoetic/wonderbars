import './contact.css'
import loop from '../assets/contact.mp4'

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Page, { Title, Content } from '../objects/page'
import Video from '../objects/video'

class Role extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
  }

  get id() {
    return this.props.title.toLowerCase();
  }

  get className() {
    return `role role--${this.id}`;
  }

  get mailto() {
    return `mailto:${this.props.email}`
  }

  render() {
    return(
      <address className={this.className}>
        <h2 className="role__title">{this.props.title}</h2>
        <p className="role__name">
          {this.props.name}
        </p>
        <p className="role__email">
          <a href={this.mailto}>{this.props.email}</a>
        </p>
      </address>
    );
  }
}

export default class Contact extends Component {
  render() {
    return(
      <Page id="contact">
        <Video src={loop} className="contact-page__video-player" />
        <Title>Contact Us</Title>
        <Content>
          <Role title="Management" name="Candice Johnson" email="candice@thewonderbars.com" />
          <Role title="Booking" name="Candice Johnson" email="candice@thewonderbars.com" />
          <Role title="Publicity" name="Candice Johnson" email="candice@thewonderbars.com" />
        </Content>
      </Page>
    );
  }
}
