import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Icon
} from '@material-ui/core'

const Topbar = ({ paddingLeft, toggleSideBar, title }) => {
  const TopBar = withStyles({
    positionStatic: {
      paddingLeft,
      zIndex: -1,
      opacity: 0.7
    }
  })(AppBar)

  return (
    <TopBar position='static'>
      <Toolbar style={{ justifyContent: toggleSideBar ? 'left' : 'center', minHeight: 64 }}>
        {toggleSideBar && <Button onClick={toggleSideBar}><Icon>menu</Icon></Button>}
        <Typography variant='h6' style={{ position: 'absolute', left: 0, right: 0, textAlign: 'center', zIndex: -1 }}>{title}</Typography>
      </Toolbar>
    </TopBar>
  )
}

Topbar.defaultProps = {
  paddingLeft: 0
}

Topbar.propTypes = {
  paddingLeft: PropTypes.number,
  title: PropTypes.string.isRequired,
  toggleSideBar: PropTypes.func
}

export default Topbar
