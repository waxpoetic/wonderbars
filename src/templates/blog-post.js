import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'

import Page from '../objects/page'
import Article from '../components/article'

export default class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const siteDescription = post.excerpt
    const { previous, next } = this.props.pageContext

    return (
      <Page id="article">
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={`${post.frontmatter.title} | ${siteTitle}`}
        />
        <Article {...post} />
        <footer className="aux">
          <nav className="navigation aux__navigation">
            {
              previous &&
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            }
            {
              next &&
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            }
          </nav>
        </footer>
      </Page>
    )
  }
}

// TODO: (formatString: "MMMM DD, YYYY")
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      html
      frontmatter {
        title
        date
      }
    }
  }
`
