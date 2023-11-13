import React from 'react'

import PropTypes from 'prop-types'

import './location.css'

const Location = (props) => {
  return (
    <div className={`location-item ${props.rootClassName} `}>
      <img alt="image" src={props.Background} className="location-background" />
      <div className="location-content">
        <span className="location-location">{props.Location}</span>
      </div>
    </div>
  )
}

Location.defaultProps = {
  Background:
    'https://images.unsplash.com/photo-1600947509785-29fb4e7d1362?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEyfHxoaW1hY2hhbHxlbnwwfHx8fDE2OTgzNDAxMDJ8MA&ixlib=rb-4.0.3&h=400',
  Location: 'Himachal pradesh,India',
  rootClassName: '',
}

Location.propTypes = {
  Background: PropTypes.string,
  Location: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Location
