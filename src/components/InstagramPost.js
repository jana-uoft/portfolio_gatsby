import React from 'react'
import PropTypes from 'prop-types'

import {
  Card,
  CardActionArea,
  CardMedia

} from '@material-ui/core'

const InstagramPost = ({ photo }) => {
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component='img'
          alt={photo.caption}
          image={photo.url}
          title={photo.caption}
          style={{ padding: 5 }}
        />
      </CardActionArea>
    </Card>
  )
}

InstagramPost.propTypes = {
  photo: PropTypes.object.isRequired
}

export default InstagramPost
