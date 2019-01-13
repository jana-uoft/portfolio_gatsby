import React from 'react'
import PropTypes from 'prop-types'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import {
  CssBaseline,
  Hidden
} from '@material-ui/core'
import teal from '@material-ui/core/colors/teal'
import {
  SEO,
  Sidebar
} from './'

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: teal,
    secondary: teal
  },
  typography: {
    useNextVariants: true
  }
})

class Layout extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      sidebarOpen: false
    }
  }

  render () {
    const { title, activePage, children } = this.props
    const { sidebarOpen } = this.state

    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:300,400,500' />
        <link rel='stylesheet' href='https://fonts.googleapis.com/icon?family=Material+Icons' />
        <SEO title={title} keywords={[`jana`, `jana rajakumar`, `freelancer`, `jana19.org`]} />
        <Hidden only={['xs', 'sm']} implementation='js'>
          <Sidebar activePage={activePage} variant='permanent' />
          <div style={{ marginLeft: 250, padding: 10 }}>
            {children}
          </div>
        </Hidden>
        <Hidden only={['md', 'lg', 'xl']} implementation='js'>
          <Sidebar activePage={activePage} variant='temporary' open={sidebarOpen} toggleSidebar={sidebarOpen => this.setState({ sidebarOpen })} />
          <div style={{ padding: 10 }}>
            {children}
          </div>
        </Hidden>
      </MuiThemeProvider>
    )
  }
}

Layout.defaultProps = {
  title: 'Home',
  activePage: '/',
  children: <></>
}

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  activePage: PropTypes.string.isRequired,
  children: PropTypes.node
}

export default Layout
