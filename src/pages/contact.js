import React from 'react'
import {
  Layout
} from '../components'
import Typography from '@material-ui/core/Typography'

const ContactPage = (props) => {
  return (
    <Layout title='Contact' activePage={props.pageResources.page.path} >
      <Typography>Hello</Typography>
    </Layout>
  )
}

export default ContactPage
