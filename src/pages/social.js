import React from 'react'
import {
  Layout
} from '../components'
import Typography from '@material-ui/core/Typography'

const SocialPage = (props) => {
  return (
    <Layout title='Social' activePage={props.pageResources.page.path} >
      <Typography>Hello</Typography>
    </Layout>
  )
}

export default SocialPage
