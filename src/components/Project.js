import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import {
  Card,
  CardHeader,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Collapse,
  Button,
  IconButton,
  Icon,
  Avatar,
  Typography
} from '@material-ui/core'
import { purple } from '@material-ui/core/colors'
import { ImageGallery } from './'

export default class Project extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isCardExpanded: false,
      isGalleryOpen: false
    }
  }

  handleExpandClick = () => {
    this.setState(state => ({ isCardExpanded: !state.isCardExpanded }))
  }

  renderTag = ({ _id, name, logo }) => {
    const { activeTags } = this.props

    return (
      <IconButton
        key={_id}
        onClick={() => this.props.handleTagClick(_id)}
        style={{ backgroundColor: activeTags.has(_id) ? purple[500] : '', padding: 5 }}
      >
        <Avatar
          alt={name}
          src={logo.asset.url}
          style={{ width: 20, height: 20 }}
        />
      </IconButton>
    )
  }

  render () {
    const {
      title,
      subTitle,
      description,
      startDate,
      endDate,
      website,
      github,
      tags
    } = this.props.project

    const { isCardExpanded, isGalleryOpen } = this.state

    const ExpandIconButton = withStyles(({
      root: {
        transform: isCardExpanded ? 'rotate(180deg)' : 'rotate(0deg)'
      }
    }))(IconButton)

    const images = this.props.project.images.map(image => image.asset.url)

    return (
      <Card style={{ height: 'fit-content' }}>
        <CardHeader
          title={title}
          subheader={subTitle}
        />
        <CardActionArea onClick={() => this.setState({ isGalleryOpen: true })}>
          <CardMedia
            component='img'
            alt={title}
            height='200'
            image={images[0]}
            title={title}
            style={{ padding: 5 }}
          />
        </CardActionArea>

        <CardActions style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, 40px)', justifyContent: 'center' }}>
          {tags.map(this.renderTag)}
        </CardActions>
        <CardActions style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', justifyContent: 'center', padding: 0 }}>
          <Button size='small' variant='contained' color='primary' href={github} target='_blank'>
            Source Code <Icon style={{ marginLeft: 5 }}> open_in_new </Icon>
          </Button>
          <Button size='small' variant='contained' color='primary' href={website} target='_blank'>
            Website <Icon style={{ marginLeft: 5 }}> open_in_new </Icon>
          </Button>
        </CardActions>
        <Collapse in={isCardExpanded} timeout='auto' unmountOnExit>
          <CardContent>
            <Typography component='p'>
              {description}
            </Typography>
          </CardContent>
        </Collapse>
        <CardActions style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', justifyItems: 'center', padding: 0 }}>
          <Typography>{startDate} - {endDate}</Typography>
          <ExpandIconButton
            onClick={this.handleExpandClick}
            aria-expanded={this.state.isCardExpanded}
            aria-label='Show more'
          >
            <Icon> expand_more </Icon>
          </ExpandIconButton>
        </CardActions>

        {isGalleryOpen && (
          <ImageGallery
            images={images}
            onClose={() => this.setState({ isGalleryOpen: false })}
            slideTimeout={5000}
          />
        )}
      </Card>
    )
  }
}
