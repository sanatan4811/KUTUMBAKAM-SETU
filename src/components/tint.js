import React from 'react'

import PropTypes from 'prop-types'

import './tint.css'

const Tint = (props) => {
  return (
    <div className={`tint-tint ${props.rootClassName} `}>
      <img
        alt={props.image_alt1}
        src={props.image_src1}
        loading="eager"
        className="tint-image"
      />
    </div>
  )
}

Tint.defaultProps = {
  image_src1:
    '/large-hanuman-ji-with-shri-ram-ji-9-on-large-print-36x24-inches-original-imaevkk5jx3he4yg-1500w.webp',
  image_src: '6904ba99-d6bf-4918-ac2d-029ad30e07d2',
  rootClassName: '',
  image_alt1: 'image',
  image_alt: 'image',
}

Tint.propTypes = {
  image_src1: PropTypes.string,
  image_src: PropTypes.string,
  rootClassName: PropTypes.string,
  image_alt1: PropTypes.string,
  image_alt: PropTypes.string,
}

export default Tint
