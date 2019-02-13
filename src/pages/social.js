import React, { Component } from 'react'
import { Layout, InstagramPost } from '../components'
import { withStyles } from '@material-ui/core/styles'
import { SocialIcon } from 'react-social-icons'
import {
  Paper,
  CircularProgress
} from '@material-ui/core'

const shuffleArray = arr => arr.sort(() => Math.random() - 0.5)

const SocialIconsWrapper = withStyles(theme => ({
  root: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
    gridGap: '20px',
    padding: '10px',
    justifyContent: 'center',
    justifyItems: 'center',
    alignItems: 'center',
    marginBottom: 20,
    position: 'sticky',
    top: 64,
    zIndex: 1
  }
}))(Paper)

export default class Social extends Component {
  constructor (props) {
    super(props)
    this.state = {
      instagramPhotos: [],
      loading: true
    }
  }

  componentDidMount = () => {
    fetch(`https://api.instagram.com/v1/users/self/media/recent/?access_token=${process.env.GATSBY_INSTAGRAM_TOKEN}&count=20`)
      .then(response => response.json())
      .then(({ data }) => {
        let instagramPhotos = []
        for (let image of data) {
          if (image.carousel_media) {
            for (let pic of image.carousel_media) {
              if (pic.images) {
                instagramPhotos.push({ url: pic.images.standard_resolution.url, caption: image.caption.text })
              }
            }
          } else {
            instagramPhotos.push({ url: image.images.standard_resolution.url, caption: image.caption.text })
          }
        }
        this.setState({ instagramPhotos, loading: false })
      })
  }

  render () {
    const { instagramPhotos, loading } = this.state
    return (
      <Layout title='Social' activePage='/social/' >
        <SocialIconsWrapper>
          <SocialIcon url='https://www.instagram.com/jana_._._._/' target='_blank' />
          <SocialIcon url='https://twitter.com/janastc19' target='_blank' />
          <SocialIcon url='https://github.com/jana-uoft' target='_blank' />
          <SocialIcon url='https://www.facebook.com/Jana.JR.19' target='_blank' />
          <SocialIcon url='https://www.linkedin.com/in/jana19/' target='_blank' />
        </SocialIconsWrapper>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, 375px)',
          gridGap: 20,
          justifyContent: 'center',
          minHeight: '70vh',
          justifyItems: 'center',
          alignItems: 'center'
        }}>
          {loading && <CircularProgress color='secondary' />}
          {shuffleArray(instagramPhotos).map(photo =>
            <InstagramPost key={photo.url} photo={photo} />)
          }
        </div>
      </Layout>
    )
  }
}
