import React from 'react'

import { Helmet } from 'react-helmet'

import './rescue-image-1.css'

const RESCUEIMAGE1 = (props) => {
  return (
    <div className="rescueimage1-container">
      <Helmet>
        <title>RESCUE-IMAGE-1 - KUTUBAKAM SETU</title>
        <meta property="og:title" content="RESCUE-IMAGE-1 - KUTUBAKAM SETU" />
      </Helmet>
      <div className="rescueimage1-container1">
        <div className="rescueimage1-container2">
          <img
            alt="image"
            src="https://ndma.gov.in/sites/default/files/IEC/floods/Social%20Media/NDMA_Flood_1.7.png"
            className="rescueimage1-image"
          />
        </div>
        <img
          alt="image"
          src="https://ndma.gov.in/sites/default/files/IEC/floods/Social%20Media/Floods_New_1.92.png"
          className="rescueimage1-image1"
        />
      </div>
      <a
        href="https://ndma.gov.in/alert-hub/Alert"
        target="_blank"
        rel="noreferrer noopener"
        className="rescueimage1-link button"
      >
        FIND OUT MORE NOT ONLY  ABOUT FLOOD BUT OTHER&apos;S DISASTER RESCUE IN
        RESOURCES SECTION
      </a>
      <img
        alt="image"
        src="https://ndma.gov.in/sites/default/files/IEC/floods/Social%20Media/Floods_New_1.8.1.png"
        className="rescueimage1-image2"
      />
      <img
        alt="image"
        src="https://ndma.gov.in/sites/default/files/IEC/floods/Social%20Media/Floods-%20DO_s%20and%20Dont_s%20(5).png"
        className="rescueimage1-image3"
      />
    </div>
  )
}

export default RESCUEIMAGE1
