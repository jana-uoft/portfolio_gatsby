import React from 'react'
import {
  Layout
} from '../components'
import Typography from '@material-ui/core/Typography'

const ResumePage = (props) => {
  return (
    <Layout title='Resume' activePage={props.pageResources.page.path} >
      <Typography>Hello</Typography>
    </Layout>
  )
}

export default ResumePage
