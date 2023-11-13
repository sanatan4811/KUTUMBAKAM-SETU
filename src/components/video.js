import React from 'react'

import PropTypes from 'prop-types'

import './video.css'

const Video = (props) => {
  return (
    <div className="video-container">
      <iframe
        src="https://www.youtube.com/embed/XAuf8o3ftIY?si=nmEhTEts679T-NMv"
        allow="accelerometer,autoplay"
        allowFullScreen
        className="video-iframe"
      ></iframe>
    </div>
  )
}

Video.defaultProps = {
  video_src: '',
  image_src1:
    'https://images.unsplash.com/photo-1600336153113-d66c79de3e91?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fGZsb29kfGVufDB8fHx8MTY5ODU3Nzc2OXww&ixlib=rb-4.0.3&w=1300',
  video_src1: '',
  image_alt1: 'image',
  image_alt: 'image',
  image_src:
    'https://images.unsplash.com/photo-1600336153113-d66c79de3e91?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fGZsb29kfGVufDB8fHx8MTY5ODU3Nzc2OXww&ixlib=rb-4.0.3&w=1300',
}

Video.propTypes = {
  video_src: PropTypes.string,
  image_src1: PropTypes.string,
  video_src1: PropTypes.string,
  image_alt1: PropTypes.string,
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
}

export default Video
