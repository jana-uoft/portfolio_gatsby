import React from 'react'
import {
  Layout
} from '../components'
import { navigate } from 'gatsby-link'

function encode (data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

class ContactPage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state
      })
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error))
  }

  render () {
    return (
      <Layout title='Contact' activePage='/contact/' >
        <form
          name='contact'
          method='post'
          action='/contact/'
          data-netlify='true'
          data-netlify-honeypot='bot-field'
          onSubmit={this.handleSubmit}
        >
          <input type='hidden' name='form-name' value='contact' />
          <div className='field half first'>
            <label htmlFor='name'>Name</label>
            <input type='text' name='name' id='name' onChange={this.handleChange} />
          </div>
          <div className='field half'>
            <label htmlFor='email'>Email</label>
            <input type='text' name='email' id='email' onChange={this.handleChange} />
          </div>
          <div className='field'>
            <label htmlFor='message'>Message</label>
            <textarea name='message' id='message' rows='6' onChange={this.handleChange} />
          </div>
          <ul className='actions'>
            <li><input type='submit' value='Send Message' className='special' /></li>
            <li><input type='reset' value='Clear' /></li>
          </ul>
        </form>
      </Layout>
    )
  }

}

export default ContactPage
