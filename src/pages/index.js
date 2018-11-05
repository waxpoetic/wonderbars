import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Page, { Title, Content } from '../objects/page'
import Video from '../objects/video'
import SocialButton from '../objects/social-button'

import './index.css'
import loop from '../assets/loop.mp4'
import band from '../assets/us.jpg'
import FacebookIcon from 'react-icons/lib/fa/facebook-official'
import TwitterIcon from 'react-icons/lib/fa/twitter'
import InstagramIcon from 'react-icons/lib/fa/instagram'
import SpotifyIcon from 'react-icons/lib/fa/spotify'
import GeniusLogo from '../components/genius-logo'

export const pageQuery = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

export default class Home extends Component {
  render() {
    return(
      <Page id="home">
        <Video src={loop} className="home-page__video-player" />
        <Title className="home-page__title">We Are The Wonder Bars</Title>
        <Content className="home-page__content">
          <section className="home-page__content-block home-page__subtitle">
            <nav className="home-page__social-buttons">
              <SocialButton
                color="blue"
                title="Like us on Facebook"
                url="https://facebook.com/wonderbars">
                <FacebookIcon />
              </SocialButton>
              <SocialButton
                color="teal"
                title="Follow us on Twitter"
                url="https://twitter.com/wonderbars">
                <TwitterIcon />
              </SocialButton>
              <SocialButton
                color="purple"
                title="Follow us on Instagram"
                url="https://instagram.com/thewonderbars">
                <InstagramIcon />
              </SocialButton>
              <SocialButton
                color="green"
                title="Listen to us on Spotify"
                url="https://open.spotify.com/artist/2nrkwnQWEqM20n92QC7Cdy">
                <SpotifyIcon />
              </SocialButton>
              <SocialButton
                color="yellow"
                title="View Lyrics on Genius"
                url="https://genius.com/artists/The-wonder-bars">
                <GeniusLogo />
              </SocialButton>
            </nav>
          </section>
          <div className="home-page__band-photo">
            <img src={band} alt="members of the band" />

            <h2>
              ...a live fusion of house music, funk/soul, and rock &amp; roll!
            </h2>
          </div>

          <section className="home-page__content-block">
            <div className="home-page__biography">
              <h2>Who Are We?</h2>
              <p>
                With their roots in the worldwide jamtronica and electronic
                scenes, this four-piece outfit of live improvisation, theatrics,
                and soulful content have already begun making waves in their hometown of
                Philadelphia. By combining their exceptional DJ/sound design skills with
                virtuosic musicianship, The Wonder Bars pique the interest of dancers,
                DJs, musicians, songwriters, and anyone who appreciates an
                amazing live show.
              </p>
            </div>
          </section>
        </Content>
      </Page>
    );
  }
}
