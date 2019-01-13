import React from 'react'
import {
  Layout
} from '../components'

const ContactPage = (props) => {
  console.log(props)

  return (
    <Layout title='Contact' activePage='/contact/' >
      <form method='post' action='/contact/' netlify>
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

export default ContactPage
