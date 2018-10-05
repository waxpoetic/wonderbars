import './footer.css'
import '../objects/button.css'

import React, { Component } from 'react'

export default class Footer extends Component {
  constructor(props) {
    super(props)
    this.state = { email: null }
    this.update = this.update.bind(this)
  }

  update(event) {
    event.preventDefault()

    const name = event.target.name
    const value = event.target.value

    this.setState({ [name]: value })
  }

  render() {
    return(
      <footer className="email-signup">
        <div id="mc_embed_signup">
          <form action="https://waxpoeticrecords.us10.list-manage.com/subscribe/post?u=73cf23d7e2c4912649de23984&amp;id=f68d4d6091" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
            <div id="mc_embed_signup_scroll">
              <h2 className="email-signup__title">Subscribe for updates and free music!</h2>
              <div className="email-signup__fields">
                <div></div>
                <div className="mc-field-group email-signup__field">
                  <label htmlFor="mce-EMAIL">Email </label>
                  <input type="email" value="" onChange={this.update} name="EMAIL" className="required email" id="mce-EMAIL" />
                </div>
                <div className="email-signup__field">
                  <div className="email-signup__verification" aria-hidden="true">
                    <input type="text" name="b_73cf23d7e2c4912649de23984_f68d4d6091" tabIndex="-1" value="" onChange={this.update} />
                  </div>
                  <div>
                    <button type="submit" name="subscribe" id="mc-embedded-subscribe" className="button">
                      Subscribe
                    </button>
                  </div>
                  <div></div>
                </div>
                <div id="mce-responses" className="email-signup__response">
                  <div className="response" id="mce-error-response" style={{ display: "none" }}></div>
                  <div className="response" id="mce-success-response" style={{ display: "none" }}></div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </footer>
    );
  }
}
