import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/layout'
import Page from '../objects/page'

export default class PageTemplate extends Component {
  render() {
    const { id, html, frontmatter: { title } } = this.props.data.markdownRemark
    const cover = this.props.data.markdownRemark.frontmatter.cover.publicURL

    return (
      <Page id={id} background={cover}>
        <header className="page__header">
          <h1 className="page__title">{title}</h1>
        </header>
        <main
          className="page__content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </Page>
    )
  }
}

export const pageQuery = graphql`
  query PageBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
      }
    }
  }
`
