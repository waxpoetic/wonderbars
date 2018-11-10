import './footer.css'
import '../objects/button.css'

import React, { Component } from 'react'
import MailchimpSubscribe from 'react-mailchimp-subscribe'

export default class Footer extends Component {
  render() {
    return (
      <footer className="email-signup">
        <h2 className="email-signup__title">Subcribe for Updates</h2>
        <section className="email-signup__form">
          <MailchimpSubscribe url="https://waxpoeticrecords.us10.list-manage.com/subscribe/post?u=73cf23d7e2c4912649de23984&amp;id=e444a2e2d0" />
        </section>
      </footer>
    )
  }
}
