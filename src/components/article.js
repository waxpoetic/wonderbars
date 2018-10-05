import React from 'react'
import PropTypes from 'prop-types'

class Article extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
  }

  render() {
    const { html, frontmatter: { title, date } } = this.props

    return(
      <article>
        <header>
          <h2>{title}</h2>
        </header>
        <main dangerouslySetInnerHTML={{ __html: html }} />
        <footer>
          <time>{date}</time>
        </footer>
      </article>
    )
  }
}
