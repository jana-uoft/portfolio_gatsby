import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'

function renderImage (images, src) {
  let file = images.edges.find(image => image.node.relativePath === src)
  if (file) return <Img fluid={file.node.childImageSharp.fluid} />
  file = images.edges.find(image => image.node.relativePath === 'unknown.jpg')
  return <Img fluid={file.node.childImageSharp.fluid} />
}

const MyImg = ({ src }) => {
  return <StaticQuery
    query={graphql`
      query {
        images: allFile(filter:{ extension: { regex: "/jpeg|jpg|png|gif/"}}) {
          edges {
            node {
              extension
              relativePath
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={({ images }) => renderImage(images, src)}
  />
}

MyImg.defaultProps = {
  src: `unknown.jpg`
}

MyImg.propTypes = {
  src: PropTypes.string.isRequired
}

export default MyImg
