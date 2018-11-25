import './video.css'

import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Video extends Component {
  static propTypes = {
    className: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string
  }

  get id() {
    let { className } = this.props
    return className.replace(/__/, '-')
  }

  get className() {
    let { className } = this.props
    return `video ${className}`
  }

  get player() {
    return document.getElementById(this.id)
  }

  componentDidMount() {
    this.player.volume = 0
  }

  render() {
    let { src, alt } = this.props

    return (
      <video id={this.id} title={alt} className={this.className} autoPlay loop>
        <source src={src} />
      </video>
    )
  }
}
