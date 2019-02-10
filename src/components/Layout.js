import React from 'react'
import PropTypes from 'prop-types'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'
import { purple, red } from '@material-ui/core/colors'
import {
  SEO,
  Sidebar,
  Topbar,
  Desktop,
  Mobile
} from '.'
import bg from '../images/bg.jpg'
import LogRocket from 'logrocket'

LogRocket.init('i6kgcs/test')

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: purple,
    secondary: red
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

  toggleSideBar = () => this.setState({ sidebarOpen: true })

  render () {
    const { title, activePage, children, marginLeft } = this.props
    const { sidebarOpen } = this.state

    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:300,400,500' />
        <link rel='stylesheet' href='https://fonts.googleapis.com/icon?family=Material+Icons' />
        <SEO title={title} keywords={[`jana`, `jana rajakumar`, `freelancer`, `jana19.org`]} />
        <div style={{ backgroundPosition: 'center', backgroundSize: 'cover', background: `url('${bg}')`, minHeight: '100vh', minWidth: 400 }}>
          <Desktop>
            <Sidebar activePage={activePage} variant='permanent' />
            <Topbar title={title} paddingLeft={marginLeft} />
            <div style={{ marginLeft, minHeight: '90vh', padding: '64px 0 10px 0' }}>
              {children}
            </div>
          </Desktop>
          <Mobile>
            <Sidebar activePage={activePage} variant='temporary' open={sidebarOpen} toggleSidebar={sidebarOpen => this.setState({ sidebarOpen })} />
            <Topbar title={title} toggleSideBar={this.toggleSideBar} />
            <div style={{ minHeight: '90vh', padding: '64px 0 10px 0' }}>
              {children}
            </div>
          </Mobile>
        </div>
      </MuiThemeProvider>
    )
  }
}

Layout.defaultProps = {
  title: 'Home',
  activePage: '/',
  marginLeft: 250
}

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  activePage: PropTypes.string.isRequired,
  marginLeft: PropTypes.number,
  children: PropTypes.node.isRequired
}

export default Layout
