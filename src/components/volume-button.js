import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MuteIcon from 'react-icons/lib/fa/volume-off'
import UnmuteIcon from 'react-icons/lib/fa/volume-up'

import './volume-button.css'

export default class VolumeButton extends Component {
  static propTypes = {
    video: PropTypes.string.isRequired
  }

  constructor(props) {
    super(props)
    this.state = { volume: 0 }
    this.toggle = this.toggle.bind(this)
  }

  get player() {
    const { video } = this.props

    return document.getElementById(video)
  }

  get icon() {
    if (this.muted) {
      return <UnmuteIcon />
    } else {
      return <MuteIcon />
    }
  }

  get muted() {
    return this.state.volume === 0
  }

  toggle(event) {
    event.preventDefault()
    const volume = this.muted ? 1 : 0
    this.player.volume = volume

    this.setState({ volume })
  }

  componentDidMount() {
    this.player.volume = this.state.volume
    this.player.removeAttribute('muted')
  }

  render() {
    return(
      <button onClick={this.toggle} className="volume-button animated ">
        {this.icon}
      </button>
    )
  }
}
