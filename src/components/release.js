import './release.css'

import React, { Component } from 'react'
import { isEmpty } from 'lodash'
import PropTypes from 'prop-types'
import SpotifyIcon from 'react-icons/lib/fa/spotify'
import SocialButton from '../objects/social-button'
import GeniusLogo from '../components/genius-logo'

class Description extends Component {
  render() {
    const { children } = this.props

    return <p className="release__description">{children}</p>
  }
}

class Track extends Component {
  state = { showLyrics: false }

  toggleLyrics(event) {
    let { showLyrics } = this.state
    event.preventDefault()
    this.setState({ showLyrics: !showLyrics })
  }

  get lyricsClassName() {
    let { showLyrics } = this.state

    if (showLyrics) {
      return 'track__lyrics animated fadeInDown track__lyrics--open'
    } else {
      return 'track__lyrics'
    }
  }

  render() {
    let { name } = this.props
    let toggleLyrics = this.toggleLyrics.bind(this)

    return (
      <li className="track-list__track">
        <section className="track__name">
          <p onClick={toggleLyrics} className="track__link">
            {name}
          </p>
        </section>
        <section className={this.lyricsClassName}>
          <nav className="social-buttons">
            <SocialButton key="spotify" color="green" title="Listen on Spotify">
              <SpotifyIcon />
            </SocialButton>
            <SocialButton
              key="genius"
              color="yellow"
              title="View Lyrics on Genius"
            >
              <GeniusLogo />
            </SocialButton>
          </nav>
        </section>
      </li>
    )
  }
}

class TrackList extends Component {
  get tracks() {
    return this.props.tracks.map(name => <Track key={name} name={name} />)
  }

  render() {
    return [
      <h3 key="heading">Track Listing:</h3>,
      <ol key="list" className="release__tracks track-list">
        {this.tracks}
      </ol>,
    ]
  }
}

class Links extends Component {
  render() {
    const { spotify, genius } = this.props

    return (
      <nav className="release__links social-buttons">
        <SocialButton color="green" title="Listen on Spotify" url={spotify}>
          <SpotifyIcon />
        </SocialButton>
        <SocialButton color="yellow" title="View Lyrics on Genius" url={genius}>
          <GeniusLogo />
        </SocialButton>
      </nav>
    )
  }
}

class Title extends Component {
  render() {
    let name = this.props.children
    return <h2 className="release__name">{name}</h2>
  }
}

class Cover extends Component {
  render() {
    let { src, name } = this.props

    return (
      <div className="release__image">
        <img src={src} alt={name} />
      </div>
    )
  }
}

class Content extends Component {
  render() {
    let { children } = this.props
    return <div className="release__text">{children}</div>
  }
}

export default class Release extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    tracks: PropTypes.array,
    spotify_url: PropTypes.string,
    genius_url: PropTypes.string,
    cover: PropTypes.object,
  }

  render() {
    const {
      name,
      description,
      tracks,
      spotify_url,
      genius_url,
      cover,
    } = this.props

    return (
      <article className="release">
        <Cover src={cover.publicURL} alt={name} />
        <Content>
          <Title>{name}</Title>
          <Description>{description}</Description>
          <TrackList tracks={tracks} />
          <Links spotify={spotify_url} genius={genius_url} />
        </Content>
      </article>
    )
  }
}
