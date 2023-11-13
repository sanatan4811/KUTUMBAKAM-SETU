import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './message.css'

const MESSAGE = (props) => {
  return (
    <div className="message-container">
      <Helmet>
        <title>MESSAGE - KUTUBAKAM SETU</title>
        <meta property="og:title" content="MESSAGE - KUTUBAKAM SETU" />
      </Helmet>
      <span className="message-text">
        <span>
          कृपया भारत सरकार द्वारा दिए गए चरणों और प्रक्रिया का पालन करें। इसके
          अलावा अन्य उपयोगी वेबसाइटों की नियमित जांच करें, रेडियो सुनें, अपने
          बच्चों या अन्य बच्चों के साथ खेलें और साथ ही फिटनेस और लंबी अवधि के
          लिए काम करें। हम आप सभी के अच्छे स्वास्थ्य, समृद्धि और लंबे जीवन की
          कामना करते हैं।
        </span>
        <br></br>
        <br></br>
        <span>आपके मुकाबले</span>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <span>आपके दोस्त</span>
        <br></br>
        <br></br>
        <span>कुटुंबकम से</span>
        <span>तु</span>
      </span>
      <h1 className="message-text14">MESSAGE FROM Kutumbakam SETU</h1>
      <Link to="/" className="message-navlink">
        <svg viewBox="0 0 1024 1024" className="message-icon">
          <path d="M225.835 286.165l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l225.835-225.835 225.835 225.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-225.835-225.835 225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-225.835 225.835-225.835-225.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
        </svg>
      </Link>
    </div>
  )
}

export default MESSAGE
