import React from 'react'

import PropTypes from 'prop-types'

import './dddd.css'

const Dddd = (props) => {
  return <div className={`dddd-container ${props.rootClassName} `}></div>
}

Dddd.defaultProps = {
  rootClassName: '',
}

Dddd.propTypes = {
  rootClassName: PropTypes.string,
}

export default Dddd
