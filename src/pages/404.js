import React from 'react'
import {
  Layout
} from '../components'
import Typography from '@material-ui/core/Typography'

const NotFoundPage = (props) => (
  <Layout title='404' activePage={props.pageResources.page.path} >
    <Typography>Hello</Typography>
  </Layout>
)

export default NotFoundPage
