import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './importance.css'

const IMPORTANCE = (props) => {
  return (
    <div className="importance-container">
      <Helmet>
        <title>IMPORTANCE - KUTUBAKAM SETU</title>
        <meta property="og:title" content="IMPORTANCE - KUTUBAKAM SETU" />
      </Helmet>
      <Link to="/" className="importance-navlink">
        <svg viewBox="0 0 1024 1024" className="importance-icon">
          <path d="M225.835 286.165l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l225.835-225.835 225.835 225.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-225.835-225.835 225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-225.835 225.835-225.835-225.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
        </svg>
      </Link>
      <iframe
        src="https://www.youtube.com/embed/FplTY7OVDOk?si=T-AqRXttAzuumiS9"
        allow="accelerometer,autoplay"
        allowFullScreen
        className="importance-iframe"
      ></iframe>
      <h1 className="importance-text">importance &amp; it&apos;s role</h1>
    </div>
  )
}

export default IMPORTANCE
