import React, { Component } from 'react';
import Page, { Title, Content } from '../objects/page';
import Video from '../objects/video';
import SocialButton from '../objects/social-button';
import './about.css';
import band from '../assets/us.jpg';
// import loop from '../assets/loop.mp4';
import FacebookIcon from 'react-icons/lib/fa/facebook-official';
import TwitterIcon from 'react-icons/lib/fa/twitter';
import InstagramIcon from 'react-icons/lib/fa/instagram';
import SpotifyIcon from 'react-icons/lib/fa/spotify';

export default class About extends Component {
  render() {
    return(
      <Page id="about">
        <Title>About Us</Title>
        <Content>
          <section className="about-page__content">
            <div className="about-page__biography">
              <p>
                The Wonder Bars are a live fusion of house music, funk/soul, and rock &
                roll.
              </p>
              <p>
                With their roots in the worldwide jamtronica and electronic
                scenes, this four-piece outfit of live improvisation, theatrics,
                and soulful content have already begun making waves in their hometown of
                Philadelphia. By combining their exceptional DJ/sound design skills with
                virtuosic musicianship, The Wonder Bars pique the interest of dancers,
                DJs, musicians, songwriters, and anyone who appreciates an amazing live show.
              </p>
            </div>
            <div className="about-page__image">
              <img src={band} alt="it's us bitch" />
            </div>
          </section>
          <nav className="about-page__social-buttons">
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
              url="https://instagram.com/wonderbars">
              <InstagramIcon />
            </SocialButton>
            <SocialButton
              color="green"
              title="Listen to us on Spotify"
              url="https://open.spotify.com/artist/2nrkwnQWEqM20n92QC7Cdy">
              <SpotifyIcon />
            </SocialButton>
          </nav>
        </Content>
      </Page>
    );
  }
}
