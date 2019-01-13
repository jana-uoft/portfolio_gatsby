import React from 'react'
import {
  Layout
} from '../components'
import '../styles/animation.css'

const Animation = (
  <div className='square-animation'>
    <div className='view'>
      <div className='part'>
        <div className='plane'>
          <div className='cube'>
            <div className='face x' />
            <div className='face y' />
            <div className='face z' />
          </div>
          <div className='cube'>
            <div className='face x' />
            <div className='face y' />
            <div className='face z' />
          </div>
          <div className='cube'>
            <div className='face x' />
            <div className='face y' />
            <div className='face z' />
          </div>
          <div className='cube'>
            <div className='face x' />
            <div className='face y' />
            <div className='face z' />
          </div>
          <div className='cube'>
            <div className='face x' />
            <div className='face y' />
            <div className='face z' />
          </div>
          <div className='cube'>
            <div className='face x' />
            <div className='face y' />
            <div className='face z' />
          </div>
          <div className='cube'>
            <div className='face x' />
            <div className='face y' />
            <div className='face z' />
          </div>
          <div className='cube'>
            <div className='face x' />
            <div className='face y' />
            <div className='face z' />
          </div>
          <div className='static'>
            <div className='cube'>
              <div className='face x' />
              <div className='face y' />
              <div className='face z' />
            </div>
            <div className='cube'>
              <div className='face x' />
              <div className='face y' />
              <div className='face z' />
            </div>
          </div>
        </div>
      </div>
      <div className='part'>
        <div className='plane'>
          <div className='cube'>
            <div className='face x' />
            <div className='face y' />
            <div className='face z' />
          </div>
          <div className='cube'>
            <div className='face x' />
            <div className='face y' />
            <div className='face z' />
          </div>
          <div className='cube'>
            <div className='face x' />
            <div className='face y' />
            <div className='face z' />
          </div>
          <div className='cube'>
            <div className='face x' />
            <div className='face y' />
            <div className='face z' />
          </div>
          <div className='cube'>
            <div className='face x' />
            <div className='face y' />
            <div className='face z' />
          </div>
          <div className='cube'>
            <div className='face x' />
            <div className='face y' />
            <div className='face z' />
          </div>
          <div className='cube'>
            <div className='face x' />
            <div className='face y' />
            <div className='face z' />
          </div>
          <div className='cube'>
            <div className='face x' />
            <div className='face y' />
            <div className='face z' />
          </div>
          <div className='static'>
            <div className='cube'>
              <div className='face x' />
              <div className='face y' />
              <div className='face z' />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const IndexPage = (props) => {
  return (
    <Layout title='Home' activePage={props.pageResources.page.path} marginLeft={0} padding={0}>
      {Animation}
      <div className='header'>
        <h3>Jana Rajakumar</h3>
        <h6>Full Stack Developer</h6>
      </div>
    </Layout>
  )
}

export default IndexPage
