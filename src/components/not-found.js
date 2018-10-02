import React, { Component } from 'react';
import Page, { Title, Content } from '../objects/page';

export default class NotFound extends Component {
  render() {
    return(
      <Page id="not-found">
        <Title>Not Found</Title>
        <Content>
          The file you were looking for was not found.
        </Content>
      </Page>
    );
  }
}
