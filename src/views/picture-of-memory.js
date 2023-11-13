import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './picture-of-memory.css'

const PictureOfMemory = (props) => {
  return (
    <div className="picture-of-memory-container">
      <Helmet>
        <title>picture-of-memory - KUTUBAKAM SETU</title>
        <meta
          property="og:title"
          content="picture-of-memory - KUTUBAKAM SETU"
        />
      </Helmet>
      <h1>CELEBRATE&apos;S KUTUBAKAM OPENING&apos;S MEMORY </h1>
      <Link to="/" className="picture-of-memory-navlink">
        <svg viewBox="0 0 1024 1024" className="picture-of-memory-icon">
          <path d="M225.835 286.165l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l225.835-225.835 225.835 225.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-225.835-225.835 225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-225.835 225.835-225.835-225.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
        </svg>
      </Link>
      <img
        alt="image"
        src="https://images.unsplash.com/photo-1568612505500-39a60439925c?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIyfHxTSFJJJTIwUkFNfGVufDB8fHx8MTY5OTg4MzcwMnww&amp;ixlib=rb-4.0.3&amp;w=400"
        className="picture-of-memory-image"
      />
      <img
        alt="image"
        src="/whatsapp%20image%202023-11-13%20at%2012.22.35_ed14a065-400h.jpg"
        className="picture-of-memory-image1"
      />
    </div>
  )
}

export default PictureOfMemory
