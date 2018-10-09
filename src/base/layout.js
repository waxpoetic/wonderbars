// settings
import '../settings/fonts.css';
import '../settings/global.css';

// tools
import 'normalize.css';
import 'animate.css';

// base
import './layout.css';
import './typography.css';

// objects
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

// components
import Header from '../components/header'
import Footer from '../components/footer';

export default class Layout extends Component  {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  render() {
    const { children } = this.props

    return(
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
                description
                keywords
              }
            }
          }
        `}
        render={({ site: { siteMetadata: { title, description, keywords } } }) => (
          <>
            <Helmet
              title={title}
              meta={[
                { name: 'description', content: description },
                { name: 'keywords', content: keywords.join(', ') },
              ]}
            >
              <html lang="en" />
            </Helmet>
            <Header title={title} />
            {children}
            <Footer />
          </>
        )}
      />
    )
  }
}
