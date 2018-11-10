import './social-button.css'
import './button.css'

import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class SocialButton extends Component {
  static propTypes = {
    color: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    children: PropTypes.any.isRequired,
  }

  get className() {
    let { color } = this.props

    return `social-button social-button--${color}`
  }

  render() {
    let { url, title } = this.props
    let icon = this.props.children

    return (
      <a
        href={url}
        title={title}
        className={this.className}
        target="_blank"
        rel="noopener noreferrer"
      >
        {icon}
        <span className="social-button__title">{title}</span>
      </a>
    )
  }
}
