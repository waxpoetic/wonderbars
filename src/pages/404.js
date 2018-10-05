import React, { Component } from 'react'
import Page, { Title, Content } from '../objects/page'

import './404.css'

export default class NotFoundPage extends Component {
  render() {
    return(
      <Page id="error">
        <Title>Not Found</Title>
        <Content>
          <p>
            The file or resource you requested could not be found.
            Please check your links and try again.
          </p>
        </Content>
      </Page>
    )
  }
}
