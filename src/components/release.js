import './release.css'

import React, { Component } from 'react'
import { isEmpty } from 'lodash'
import PropTypes from 'prop-types'
import SpotifyIcon from 'react-icons/lib/fa/spotify'
// import GeniusIcon from 'react-icons/lib/fa/genius'
import SocialButton from '../objects/social-button'

class Description extends Component {
  render() {
    const { children } = this.props

    return <p className="release__description">{children}</p>
  }
}

class Track extends Component {
  state = { showLyrics: false }

  get lyrics() {
    let { showLyrics } = this.state
    let { lyrics } = this.props

    if (showLyrics && !isEmpty(lyrics)) {
      return <p>{lyrics}</p>
    } else if (showLyrics) {
      return <p><em>Lyrics not available.</em></p>
    } else {
      return <></>
    }
  }

  toggleLyrics(event) {
    event.preventDefault()
    let { showLyrics } = this.state
    this.setState({ showLyrics: !showLyrics })
  }

  render() {
    let { name } = this.props;
    let toggleLyrics = this.toggleLyrics.bind(this);

    return(
      <li className="track-list__track">
        <section className="track__name">
          <a href="#lyrics" onClick={toggleLyrics}>{name}</a>
        </section>
        <section className="track__lyrics">
          {this.lyrics}
        </section>
      </li>
    )
  }
}

class TrackList extends Component {
  get tracks() {
    return this.props.tracks.map(name => <Track name={name} />)
  }

  render() {
    return [
      <h3 key="heading">Track Listing:</h3>,
      <ol key="list" className="release__tracks track-list">
        {this.tracks}
      </ol>
    ]
  }
}

class Links extends Component {
  render() {
    const { spotify, genius } = this.props;

    return(
      <nav className="release__links">
        <SocialButton color="green" title="Listen on Spotify" url={spotify}>
          <SpotifyIcon />
        </SocialButton>
        <SocialButton color="yellow" title="View Lyrics on Genius" url={genius} />
      </nav>
    )
  }
}

class Title extends Component {
  render() {
    let name = this.props.children;
    return <h2 className="release__name">{name}</h2>
  }
}

class Cover extends Component {
  render() {
    let { src, name } = this.props

    return(
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
    cover: PropTypes.string
  }

  render() {
    const {
      name, description, tracks, spotify_url, cover
    } = this.props;
    const genius_url = ''

    return(
      <article className="release">
        <Cover src={cover.publicURL} alt={name} />
        <Content>
          <Title>{name}</Title>
          <Description>{description}</Description>
          <TrackList tracks={tracks} />
          <Links spotify={spotify_url} genius={genius_url} />
        </Content>
      </article>
    );
  }
}
