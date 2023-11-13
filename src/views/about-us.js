import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './about-us.css'

const AboutUs = (props) => {
  return (
    <div className="about-us-container">
      <Helmet>
        <title>About-us - KUTUBAKAM SETU</title>
        <meta property="og:title" content="About-us - KUTUBAKAM SETU" />
      </Helmet>
      <div className="about-us-container1">
        <h1 className="about-us-text">WELCOME! TO KUTUMBAKAM SETU</h1>
        <h1 className="about-us-text1">
          <span>
            कुटुंबकम सेतु एक वेबसाइट नहीं बल्कि एक परिवार है जिसमें परिवार के कई
            सदस्य हैं। जब उनमें से किसी एक को कष्ट होता है तो बाकी सभी
            परिवारजनों को भी कष्ट होता है। इसी तरह कुटुंबकम सेतु भी दर्द होने पर
            आहत हो जाता है। तो, यह सेतु वेबसाइट दर्द निवारक के रूप में कार्य
            करती है। जब भी आप खतरे में हों या बचाव के लिए हों तो कृपया कुटुंबकम
            सेतु से संपर्क करें या 112 पर कॉल करें।
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="about-us-text3">
            CAUTION: IT IS UNDER TRIAL PHASE
          </span>
          <br className="about-us-text4"></br>
          <span>धन्यवाद!</span>
          <br></br>
          <span>कुटुंबकम सेतु</span>
        </h1>
        <Link to="/" className="about-us-navlink">
          <svg viewBox="0 0 1024 1024" className="about-us-icon">
            <path d="M225.835 286.165l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l225.835-225.835 225.835 225.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-225.835-225.835 225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-225.835 225.835-225.835-225.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
          </svg>
        </Link>
      </div>
    </div>
  )
}

export default AboutUs
