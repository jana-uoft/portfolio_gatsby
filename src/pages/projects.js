import React from 'react'
import {
  Layout
} from '../components'
import Typography from '@material-ui/core/Typography'

const ProjectsPage = (props) => {
  return (
    <Layout title='Projects' activePage={props.pageResources.page.path} >
      <Typography>Hello</Typography>
    </Layout>
  )
}

export default ProjectsPage
