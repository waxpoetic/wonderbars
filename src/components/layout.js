// settings
import '../settings/fonts.css';
import '../settings/global.css';

// tools
import 'normalize.css';
import 'animate.css';

// base
import '../base/layout.css';
import '../base/typography.css';

// objects
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

// components
import Header from './header'
import Navigation from './navigation';
import Footer from './footer';

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
              }
            }
          }
        `}
        render={data => (
          <>
            <Helmet
              title={data.site.siteMetadata.title}
              meta={[
                { name: 'description', content: 'Sample' },
                { name: 'keywords', content: 'sample, something' },
              ]}
            >
              <html lang="en" />
            </Helmet>
            <Navigation />
            <Header siteTitle={data.site.siteMetadata.title} />
            {children}
            <Footer />
          </>
        )}
      />
    )
  }
}
