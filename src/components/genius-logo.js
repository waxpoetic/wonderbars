import './genius-logo.css'
import image from '../assets/genius-logo.png'
import React, { Component } from 'react'

export default class GeniusLogo extends Component {
  render() {
    return <img src={image} alt="Genius" className="genius-logo" />
  }
}
