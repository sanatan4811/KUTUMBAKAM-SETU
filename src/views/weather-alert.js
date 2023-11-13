import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './weather-alert.css'

const WeatherAlert = (props) => {
  return (
    <div className="weather-alert-container">
      <Helmet>
        <title>weather-alert - KUTUBAKAM SETU</title>
        <meta property="og:title" content="weather-alert - KUTUBAKAM SETU" />
      </Helmet>
      <div className="weather-alert-container1">
        <div className="weather-alert-container2">
          <React.Fragment>
            <React.Fragment>
              <div
                id="ww_d81843853d8d3"
                v="1.3"
                loc="auto"
                a="{&#x22;t&#x22;:&#x22;horizontal&#x22;,&#x22;lang&#x22;:&#x22;en&#x22;,&#x22;sl_lpl&#x22;:1,&#x22;ids&#x22;:[],&#x22;font&#x22;:&#x22;Arial&#x22;,&#x22;sl_ics&#x22;:&#x22;one_a&#x22;,&#x22;sl_sot&#x22;:&#x22;celsius&#x22;,&#x22;cl_bkg&#x22;:&#x22;image&#x22;,&#x22;cl_font&#x22;:&#x22;#FFFFFF&#x22;,&#x22;cl_cloud&#x22;:&#x22;#FFFFFF&#x22;,&#x22;cl_persp&#x22;:&#x22;#81D4FA&#x22;,&#x22;cl_sun&#x22;:&#x22;#FFC107&#x22;,&#x22;cl_moon&#x22;:&#x22;#FFC107&#x22;,&#x22;cl_thund&#x22;:&#x22;#FF5722&#x22;}"
              >
                More forecasts:{' '}
                <a
                  href="https://oneweather.org/london/"
                  id="ww_d81843853d8d3_u"
                  target="_blank"
                >
                  oneweather.org
                </a>
              </div>
              <Script
                async={true}
                src="https://app2.weatherwidget.org/js/?id=ww_d81843853d8d3"
              />
            </React.Fragment>
          </React.Fragment>
        </div>
      </div>
      <span className="weather-alert-text">
        MODERTE RAINFALL IN  ANDMAN, SOME SOUTHERM PART  : Exercise caution on
        roads and be prepared for possible disruptions.  
      </span>
      <span className="weather-alert-text1">
        <span className="weather-alert-text2">
          CYCLONE ALERT IN  NEXT 48 HOURS : NIL  :   Take necessary precautions,
          secure outdoor items, and stay tuned for updates from meteorological
          services.
        </span>
        <br></br>
      </span>
      <h1 className="weather-alert-text4">QUICK WEATHER IMFORMATION</h1>
      <Link to="/" className="weather-alert-navlink">
        <svg viewBox="0 0 1024 1024" className="weather-alert-icon">
          <path d="M225.835 286.165l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l225.835-225.835 225.835 225.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-225.835-225.835 225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-225.835 225.835-225.835-225.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
        </svg>
      </Link>
      <span>
        <span className="weather-alert-text6">
          HEAVY RAINFALL IN Bay of bengalTamilnadu,pounducherry,&amp;
          karaikal&amp; kerala &amp; mahe,Andhrapradesh&amp; yanan&amp; kerala
          during 14 th -16 th November : Stay indoors and avoid unnecessary
          travel. Follow local authorities&apos; instructions.
        </span>
        <br className="weather-alert-text7"></br>
        <span>     </span>
      </span>
      <a
        href="https://mausam.imd.gov.in/imd_latest/contents/cyclone.php"
        target="_blank"
        rel="noreferrer noopener"
        className="weather-alert-link button"
      >
        FIND MORE
      </a>
    </div>
  )
}

export default WeatherAlert
