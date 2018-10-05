import './page.css';

import React, { Component } from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import Layout from '../components/layout'
import { compact } from 'lodash'

export class Title extends Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.any.isRequired
  }

  get className() {
    let { className } = this.props;

    return compact(['page__title', className]).join(' ')
  }

  render() {
    const text = this.props.children;
    const pageTitle = `${text} - The Wonder Bars`

    return(
      <section className={this.className}>
        <Helmet title={pageTitle} />
        <h1>{text}</h1>
      </section>
    );
  }
}

export class Content extends Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.any.isRequired
  }

  get className() {
    let { className } = this.props;
    if (className) return `page__content ${className}`

    return 'page__content'
  }

  render() {
    let { children } = this.props;

    return(
      <section className={this.className}>
        {children}
      </section>
    );
  }
}

export default class Page extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.any.isRequired
  }

  get className() {
    return `page ${this.props.id}-page`;
  }

  render() {
    let { children } = this.props;

    return(
      <Layout>
        <main className={this.className}>
          {children}
        </main>
      </Layout>
    );
  }
}
