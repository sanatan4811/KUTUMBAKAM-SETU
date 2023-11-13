import React from 'react'

import { Helmet } from 'react-helmet'

import './sanskit.css'

const Sanskit = (props) => {
  return (
    <div className="sanskit-container">
      <Helmet>
        <title>sanskit - KUTUBAKAM SETU</title>
        <meta property="og:title" content="sanskit - KUTUBAKAM SETU" />
      </Helmet>
      <div className="sanskit-container1">
        <span>Text</span>
        <div className="sanskit-container2">
          <h1 className="sanskit-text1">\</h1>
          <span className="sanskit-text2">
            &gt; मधु॒ वाता ऋतायते मधु क्षरन्ति सिन्धवः।माध्वीर्नः सन्त्वोषधीः ॥
          </span>
          <span className="sanskit-text3">
            &gt; Environment provides bliss to people leading their
            lifeperfectly. Rivers bliss us with sacred water and provide
            ushealth, night, morning, vegetation. Sun bliss us with
            peacefullife. Our cows provide us milk.
          </span>
          <div className="sanskit-container3">
            <div className="sanskit-container4">
              <span className="sanskit-text4">
                &gt;दश कूप समा वापी, दशवापी समोह्नद्रः।दशह्नद समः पुत्रों,
                दशपुत्रो समो द्रमुः।
              </span>
            </div>
            <span className="sanskit-text5">
              ॐ द्यौ: शान्तिरन्तरिक्षॅं शान्ति:,पृथ्वी शान्तिराप: शान्तिरोषधय:
              शान्ति:।वनस्पतय: शान्तिर्विश्र्वे देवा: शान्तिर्ब्रह्म
              शान्ति:,सर्वॅंशान्ति:, शान्तिरेव शान्ति:, सा मा शान्तिरेधि।।ॐ
              शान्ति: शान्ति: शान्ति:।।
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sanskit
