import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { withStyles } from '@material-ui/core/styles'
import {
  SwipeableDrawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Icon
} from '@material-ui/core'
import { teal } from '@material-ui/core/colors'

const items = [
  { label: 'Home', page: '/', icon: 'home' },
  { label: 'Resume', page: '/resume/', icon: 'local_library' },
  { label: 'Projects', page: '/projects/', icon: 'dns' },
  { label: 'Social', page: '/social/', icon: 'group' },
  { label: 'Contact Me', page: '/contact/', icon: 'contact_mail' }
]

const StyledListItem = withStyles({
  root: {
    minHeight: 60,
    '&:hover': {
      backgroundColor: `${teal[500]}`
    },
    '&$selected': {
      backgroundColor: `${teal[500]} !important`
    }
  },
  selected: { }
})(ListItem)

const renderItem = ({ label, page, icon, activePage }) => (
  <StyledListItem
    key={page}
    button
    divider
    selected={activePage === page}
    component={props => <Link to={page} {...props} />}
  >
    <ListItemIcon><Icon>{icon}</Icon></ListItemIcon>
    <ListItemText primary={label} />
  </StyledListItem>
)

const StyledSwipeableDrawer = withStyles({
  paper: {
    width: 250,
    border: 'none'
  }
})(SwipeableDrawer)

const Sidebar = ({ activePage, variant, open, toggleSidebar }) => (
  <StyledSwipeableDrawer
    open={open}
    variant={variant}
    onOpen={() => toggleSidebar(true)}
    onClose={() => toggleSidebar(false)}
  >
    <List>
      {items.map((item) => renderItem({ ...item, activePage }))}
    </List>
  </StyledSwipeableDrawer>
)

Sidebar.defaultProps = {
  activePage: '/',
  variant: 'permanent',
  open: false
}

Sidebar.propTypes = {
  activePage: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
  open: PropTypes.bool,
  toggleSidebar: PropTypes.func
}

export default Sidebar
