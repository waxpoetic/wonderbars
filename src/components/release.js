import './release.css'

import React, { Component } from 'react'
import { map, isEmpty } from 'lodash'
import PropTypes from 'prop-types'
import marked from 'marked'
import SpotifyIcon from 'react-icons/lib/fa/spotify'
import SocialButton from '../objects/social-button'

class Description extends Component {
  render() {
    let text = { __html: marked(this.props.children) }

    return <p className="release__description" dangerouslySetInnerHTML={text} />
  }
}

class Track extends Component {
  state = { showLyrics: false }

  get lyrics() {
    let { showLyrics } = this.state
    let { lyrics } = this.props
    let renderedLyrics;
    if (lyrics) renderedLyrics = { __html: marked(lyrics) }

    if (showLyrics && !isEmpty(lyrics)) {
      return <p dangerouslySetInnerHTML={renderedLyrics} />
    } else if (showLyrics) {
      return <p><em>Lyrics not available.</em></p>
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
    return map(this.props.tracks, params => <Track {...params} key={params.id} />)
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

class SpotifyLink extends Component {
  render() {
    let { url } = this.props;

    return(
      <p className="release__spotify-link">
        <SocialButton color="green" title="Listen on Spotify" url={url}>
          <SpotifyIcon />
        </SocialButton>
      </p>
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
    let {
      name, description, tracks, spotify_url, cover
    } = this.props;

    return(
      <article className="release">
        <Cover src={cover} alt={name} />
        <Content>
          <Title>{name}</Title>
          <Description>{description}</Description>
          <TrackList tracks={tracks} />
          <SpotifyLink url={spotify_url} />
        </Content>
      </article>
    );
  }
}
