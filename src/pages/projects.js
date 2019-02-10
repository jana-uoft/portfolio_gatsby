import React, { Component } from 'react'
import { graphql } from 'gatsby'
import { Layout, Project } from '../components'
import { withStyles } from '@material-ui/core/styles'
import {
  Paper,
  Chip,
  Avatar
} from '@material-ui/core'

const TagsWrapper = withStyles({
  root: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, 150px)',
    gridGap: '10px !important',
    padding: '5px 0',
    justifyContent: 'center',
    marginBottom: 20,
    maxHeight: 130,
    overflowY: 'auto',
    position: 'sticky',
    top: 64,
    zIndex: 1
  }
})(Paper)

export default class Projects extends Component {
  constructor (props) {
    super(props)
    this.state = {
      activeTags: new Set([])
    }
  }

  handleTagClick = _id => {
    let { activeTags } = this.state
    !activeTags.has(_id) ? activeTags.add(_id) : activeTags.delete(_id)
    this.setState({ activeTags })
  }

  renderChip = ({ _id, name, logo }) => {
    const { activeTags } = this.state
    return (
      <Chip
        key={_id}
        avatar={<Avatar alt={name} src={logo.asset.url} style={{ width: 30, height: 30 }} />}
        label={name}
        clickable
        onClick={() => this.handleTagClick(_id)}
        color={activeTags.has(_id) ? 'primary' : 'default'}
        style={{ backfaceColor: activeTags.has(_id) ? 'dimgrey' : 'transparent' }}
      />
    )
  }

  hasActiveTags = tags => {
    const { activeTags } = this.state
    if (activeTags.size === 0) return true
    else return tags.some(({ _id }) => activeTags.has(_id))
  }

  render () {
    const { activeTags } = this.state
    const { edges: projects } = this.props.data.allSanityProject
    const { edges: tags } = this.props.data.allSanityTag

    return (
      <Layout title='Projects' activePage='/projects/' >
        <TagsWrapper elevation={2}>
          {tags.map(({ node }) => this.renderChip(node))}
        </TagsWrapper>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, 375px)',
          gridGap: 20,
          justifyContent: 'center'
        }}>
          {projects.filter(({ node }) => this.hasActiveTags(node.tags)).map(({ node }) =>
            <Project key={node._id} project={node} handleTagClick={this.handleTagClick} activeTags={activeTags} />)}
        </div>
      </Layout>
    )
  }
}

export const query = graphql`
  query AllProjects {
    allSanityProject (
        sort: {
          fields: [endDate]
          order: DESC
        }
    ) {
      edges {
        node {
          _id,
          title,
          subTitle,
          description,
          startDate(formatString: "MMMM YYYY"),
          endDate(formatString: "MMMM YYYY"),
          website,
          github,
          tags {
            _id,
            name,
            logo {
            asset {
              url
            }
          }
          },
          images {
            asset {
              url
            }
          }
        }
      }
    }
    allSanityTag (
      sort: {
          fields: [name]
          order: ASC
        }
    ) {
      edges {
        node {
          _id,
          name,
          logo {
            asset {
              url
            }
          }
        }
      }
    }
  }
`
