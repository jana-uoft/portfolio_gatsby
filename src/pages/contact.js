import React from 'react'
import {
  Layout
} from '../components'

class ContactPage extends React.Component {
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
      .then(() => navigateTo (form.getAttribute('action')))
      .catch(error => alert (error))
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
          <div className='field half first'>
            <label htmlFor='name'>Name</label>
            <input type='text' name='name' id='name' />
          </div>
          <div className='field half'>
            <label htmlFor='email'>Email</label>
            <input type='text' name='email' id='email' />
          </div>
          <div className='field'>
            <label htmlFor='message'>Message</label>
            <textarea name='message' id='message' rows='6' />
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
