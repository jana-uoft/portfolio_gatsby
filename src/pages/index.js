import React from 'react'
import { Layout } from '../components'
import homeGif from '../images/home.gif'
import rocketGif from '../images/rocket.gif'

import Typography from '@material-ui/core/Typography'

const IndexPage = () => {
  return (
    <Layout title='Home' activePage='/'>
      <div style={{ display: 'grid', gridGap: 20, justifyItems: 'center' }}>
        <img src={homeGif} width={300} />
        <Typography variant='h3'>Jana Rajakumar</Typography>
        <Typography variant='h5'>Full Stack Developer</Typography>
        <img src={rocketGif} width={300} />
      </div>
    </Layout>
  )
}

export default IndexPage
