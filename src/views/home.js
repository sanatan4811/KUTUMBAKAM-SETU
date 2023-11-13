import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Tint from '../components/tint'
import Dddd from '../components/dddd'
import Component3 from '../components/component3'
import Offer from '../components/offer'
import Slideshow from '../components/slideshow'
import Location from '../components/location'
import Guide from '../components/guide'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>KUTUBAKAM SETU</title>
        <meta property="og:title" content="KUTUBAKAM SETU" />
      </Helmet>
      <a
        href="https://www.india.gov.in/"
        target="_blank"
        rel="noreferrer noopener"
        className="home-link"
      >
        <img
          alt="image"
          src="/screenshot%202023-10-24%20142136-1500w.png"
          loading="eager"
          className="home-image link"
        />
      </a>
      <section className="home-hero">
        <div className="home-main">
          <div className="home-video">
            <video
              src
              poster="/Videos/hero-cover1-1500h.png"
              className="home-video1"
            ></video>
            <Tint rootClassName="tint-root-class-name"></Tint>
          </div>
          <div className="home-content">
            <header data-thq="thq-navbar" className="home-navbar">
              <div className="home-container01">
                <div className="home-container02">
                  <div className="home-container03">
                    <div className="home-container04"></div>
                  </div>
                </div>
              </div>
              <a href="#help48" className="home-link01">
                HELP
              </a>
              <Link to="/weather-alert" className="home-navlink">
                WEATHER ALERT
              </Link>
              <div data-thq="thq-burger-menu" className="home-menu">
                <div className="home-links">
                  <Link to="/message" className="home-navlink01 link">
                    Section
                  </Link>
                  <Link to="/register" className="home-navlink02 link">
                    Registration
                  </Link>
                  <Link to="/about-us" className="home-navlink03 link">
                    ABOUT  US
                  </Link>
                  <Link to="/importance" className="home-navlink04 link">
                    IMPORTANCE
                  </Link>
                </div>
                <button className="home-hamburger button">
                  <svg viewBox="0 0 1024 1024" className="home-icon">
                    <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                  </svg>
                </button>
              </div>
              <div
                data-thq="thq-mobile-menu"
                className="home-mobile-menu button-option"
              >
                <div
                  data-thq="thq-mobile-menu-nav"
                  data-role="Nav"
                  className="home-nav DOWN"
                >
                  <div className="home-container05">
                    <img
                      alt="logo"
                      src="https://images.unsplash.com/photo-1600093112291-7b553e3fcb82?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEyfHxoYW51bWFufGVufDB8fHx8MTY5ODIxMDAxMnww&amp;ixlib=rb-4.0.3&amp;w=200"
                      className="home-logo"
                    />
                    <div
                      data-thq="thq-close-menu"
                      className="home-menu-close"
                    ></div>
                    <div className="home-container06">
                      <Link to="/" className="home-navlink05">
                        <svg viewBox="0 0 1024 1024" className="home-icon02">
                          <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                        </svg>
                      </Link>
                    </div>
                  </div>
                  <nav
                    data-thq="thq-mobile-menu-nav-links"
                    data-role="Nav"
                    className="home-nav1"
                  ></nav>
                  <img
                    alt="image"
                    src="https://images.unsplash.com/photo-1628878932238-75e69811b8a7?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEwfHxuYW1hc3RlfGVufDB8fHx8MTY5ODQzNDc1MXww&amp;ixlib=rb-4.0.3&amp;w=500"
                    className="home-image01"
                  />
                  <Link to="/weather-alert" className="home-navlink06 button">
                    WEATHER ALERT
                  </Link>
                  <Link to="/about-us" className="home-navlink07 button">
                    ABOUT US
                  </Link>
                  <Link to="/register" className="home-navlink08 button">
                    REGISTRATION
                  </Link>
                  <Link to="/importance" className="home-navlink09 button">
                    IMPORTANCE
                  </Link>
                </div>
              </div>
            </header>
            <div className="home-center">
              <h1 className="home-header">
                <span>पर्यावरणनाशेन नश्यन्ति सर्वजन्तव: ।</span>
                <br></br>
                <span>⁣पवन: दुष्टतां याति प्रकृतिविकृतायते।।⁣</span>
              </h1>
              <div className="home-heading">
                <p className="home-caption">
                  Due  to pollution (destruction) of our enviroment,all beigns
                  are  destroyed,the winds get vicious and the name become
                  hostile
                </p>
              </div>
              <div className="home-border"></div>
            </div>
          </div>
        </div>
        <div id="features" className="home-feaures">
          <Link to="/sanskit" className="home-find button">
            प्रकृतेः अन्वेषणं कुर्वन्तु विश्वस्य अन्वेषणं कुर्वन्तु
          </Link>
          <Link to="/weather-alert" className="home-find01 button">
            वातावरणम्‌   सचेत
          </Link>
          <a
            href="https://mausam.imd.gov.in/imd_latest/contents/cyclone.php"
            target="_blank"
            rel="noreferrer noopener"
            className="home-find02 button"
          >
            अपने क्षेत्र के मौसम और अलर्ट, चक्रवातों और तूफानों के बारे में और
            जानें
          </a>
          <div className="home-content01"></div>
          <Link to="/" className="home-navlink10">
            <div className="home-offer-container"></div>
          </Link>
        </div>
      </section>
      <section id="help48" className="home-help-481">
        <div className="home-heading01"></div>
        <div className="home-main1">
          <p className="home-caption01">
            <span>ॐ सर्वे भवन्तु सुखिनः ।</span>
            <br className="home-text04"></br>
            <span>सर्वे सन्तु निरामयाः ।</span>
            <br></br>
            <span>सर्वे भद्राणि पश्यन्तु ।</span>
            <br></br>
            <span>मा कश्चित् दुःख भाग्भवेत् ॥</span>
            <br></br>
            <span>ॐ शान्तिः शान्तिः शान्तिः॥</span>
            <br></br>
            <br></br>
            <span>
              HELPING FORM सहायता प्रपत्र(click on get my location &amp; submit)
            </span>
          </p>
        </div>
        <div className="home-container07">
          <Dddd rootClassName="dddd-root-class-name"></Dddd>
          <Component3></Component3>
        </div>
      </section>
      <section id="tours" className="home-quick-view">
        <div className="home-main2">
          <Link to="/" className="home-navlink11">
            <div className="home-offer-container01"></div>
          </Link>
          <h2 className="home-header01">आपातकालीन नंबर</h2>
          <p className="home-caption02">Emergency number</p>
        </div>
        <div className="home-offers">
          <a href="tel:112">
            <Offer
              Image="https://images.unsplash.com/photo-1629409670076-7a4d38a4c219?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDJ8fDExMnxlbnwwfHx8fDE2OTk4MTAwNTR8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
              Guides="112 केन्द्रीकृत हेल्पलाइन नंबर"
              Location="112 CENTRALIZED  HELPLINE NUMBER "
              Description="GOVERMENT OF INDIA"
              rootClassName="offer-root-class-name"
              className="home-component03"
            ></Offer>
          </a>
          <a href="tel:100">
            <Offer
              Image="/screenshot%202023-10-24%20142136-1500w.png"
              Guides="100-पुलिस हेल्पलाइन नंबर"
              Location="100 -POLICE HELPLINE NUMBER"
              Description=" GOVERMENT OF INDIA"
              className="home-component04"
            ></Offer>
          </a>
          <a href="tel:102">
            <Offer
              Image="/screenshot%202023-10-24%20142136-1500w.png"
              Guides="102- एम्बुलेंस हेल्पलाइन नंबर"
              Location="102-   AMBULANCE HELPLINE NUMBER"
              Description="GOVERMENT OF INDIA"
              className="home-component05"
            ></Offer>
          </a>
          <Link to="/">
            <div className="home-offer-container02"></div>
          </Link>
          <Link to="/">
            <div className="home-offer-container03"></div>
          </Link>
          <Link to="/">
            <div className="home-offer-container04"></div>
          </Link>
          <Link to="/">
            <div className="home-offer-container05">
              <Offer
                Image="/whatsapp%20image%202023-10-29%20at%2000.58.15_a02b8361-1500w.jpg"
                Guides="011-24363260 - एनडीआरएफ हेल्पलाइन नंबर"
                Location="011-24363260 - NDRF HELPLINE NUMBER"
                Description="NDRF - GOVERMENT OF INDIA"
              ></Offer>
            </div>
          </Link>
          <Link to="/">
            <div className="home-offer-container06">
              <Offer
                Image="/screenshot%202023-10-24%20142136-1500w.png"
                Guides="14567-वरिष्ठ नागरिक हेल्पलाइन"
                Location="14567-Senior Citizen Helpline"
                Description="GOVERMENT OF INDIA"
              ></Offer>
            </div>
          </Link>
          <Link to="/">
            <div className="home-offer-container07">
              <Offer
                Image="/screenshot%202023-10-24%20142136-1500w.png"
                Guides="181-महिला हेल्पलाइन नंबर"
                Location="181-WOMEN HELPLINE NUMBER"
                Description="GOVERMENT OF INDIA"
              ></Offer>
            </div>
          </Link>
          <Offer
            Image="/screenshot%202023-10-24%20142136-1500w.png"
            Guides="राष्ट्रीय विष सूचना केंद्र - एम्स नई दिल्ली (24*7) 1800116117, 011-26593677, 26589391"
            Location="National Poisions Information Centre - AIIMS NEW DELHI ( 24*7 ) 1800116117 , 011-26593677, 26589391"
            Description="GOVERMENT OF INDIA"
          ></Offer>
          <Link to="/">
            <div className="home-offer-container08">
              <Offer
                Image="/screenshot%202023-10-24%20142136-1500w.png"
                Guides="1094-पुलिस उपायुक्त-लापता बच्चा एवं महिला"
                Location="1094-Deputy Commissioner Of Police – Missing Child And Women"
                Description="GOVERMENT OF INDIA"
              ></Offer>
            </div>
          </Link>
          <Link to="/">
            <div className="home-offer-container09">
              <Offer
                Image="/screenshot%202023-10-24%20142136-1500w.png"
                Guides="1098 बच्चे मुश्किल हालात में"
                Location="1098 CHILDREN IN DIFFICULT SITUATION"
                Description="GOVERMENT OF INDIA"
              ></Offer>
              <Offer
                Image="/screenshot%202023-10-24%20142136-1500w.png"
                Guides="1091-महिला हेल्पलाइन"
                Location=" 1091 -WOMEN HELPLINE"
                Description="GOVERMENT OF INDIA"
              ></Offer>
            </div>
          </Link>
        </div>
        <div className="home-offers1">
          <a href="tel:108">
            <Offer
              Image="/screenshot%202023-10-24%20142136-1500w.png"
              Guides="1078-आपदा प्रबंधन (एन.डी.एम.ए.)"
              Location="1078 -Disaster Management ( N.D.M.A ) "
              Description="GOVERMENT OF INDIA"
              rootClassName="offer-root-class-name4"
              className="home-component13"
            ></Offer>
          </a>
          <a href="tel:101">
            <Offer
              Image="/screenshot%202023-10-24%20142136-1500w.png"
              Guides="101-फायर हेल्पलाइन"
              Location="101 -FIRE HELPLINE"
              Description="GOVERMENT OF INDIA"
              className="home-component14"
            ></Offer>
          </a>
          <a href="tel:9711077372">
            <Offer
              Image="/whatsapp%20image%202023-10-29%20at%2000.58.15_a02b8361-1500w.jpg"
              Guides="9711077372-भूकंप/बाढ़/आपदा (एनडीआरएफ मुख्यालय) एनडीआरएफ हेल्पलाइन"
              Location="9711077372-EARTHQUAKE / FLOOD / DISASTER ( N.D.R.F Headquaters ) NDRF HELPLINE "
              Description="GOVERMENT OF INDIA"
              className="home-component15"
            ></Offer>
          </a>
          <Link to="/">
            <div className="home-offer-container10"></div>
          </Link>
          <Link to="/">
            <div className="home-offer-container11"></div>
          </Link>
          <Link to="/">
            <div className="home-offer-container12"></div>
          </Link>
          <Link to="/">
            <div className="home-offer-container13">
              <Offer
                Image="/screenshot%202023-10-24%20142136-1500w.png"
                Guides="1072-रेलवे दुर्घटना आपातकालीन सेवा"
                Location="1072-Railway Accident Emergency Service"
                Description="GOVERMENT OF INDIA"
              ></Offer>
            </div>
          </Link>
          <Link to="/">
            <div className="home-offer-container14">
              <Offer
                Image="/screenshot%202023-10-24%20142136-1500w.png"
                Guides="1073/1033-सड़क दुर्घटना आपातकालीन सेवा/हाईवे"
                Location="1073/1033-Road Accident Emergency Service/HIGHWAY"
                Description="GOVERMENT OF INDIA"
              ></Offer>
            </div>
          </Link>
          <Link to="/">
            <div className="home-offer-container15">
              <Offer
                Image="/screenshot%202023-10-24%20142136-1500w.png"
                Guides="1070-प्राकृतिक आपदाओं के लिए राहत आयुक्त"
                Location="1070-Relief Commissioner For Natural Calamities"
                Description="GOVERMENT  OF INDIA"
              ></Offer>
            </div>
          </Link>
          <Link to="/">
            <div className="home-offer-container16"></div>
          </Link>
          <Link to="/">
            <div className="home-offer-container17"></div>
          </Link>
        </div>
        <div className="home-offers2">
          <Offer
            Image="/screenshot%202023-10-24%20142136-1500w.png"
            Guides="1060-ओआरबीओ सेंटर, एम्स (अंग दान के लिए) दिल्ली"
            Location="1060-ORBO Centre, AIIMS (For Donation Of Organ) Delhi"
            Description="GOVERMENT OF INDIA"
            rootClassName="offer-root-class-name3"
          ></Offer>
          <Offer
            Image="/screenshot%202023-10-24%20142136-1500w.png"
            Guides="011-23978046 या 1075-कोविड-19 आपातकालीन"
            Location=" 011-23978046 OR 1075-COVID-19 EMERGENCY"
            Description="GOVERMENT OF INDIA"
            rootClassName="offer-root-class-name13"
          ></Offer>
          <Offer
            Image="/screenshot%202023-10-24%20142136-1500w.png"
            Guides="115620-साइबर अपराध हेल्पलाइन"
            Location="115620-CYBER CRIME HELPLINE  "
            Description="GOVERMENT OF INDIA"
          ></Offer>
          <Link to="/">
            <div className="home-offer-container18"></div>
          </Link>
          <Link to="/">
            <div className="home-offer-container19"></div>
          </Link>
          <Link to="/">
            <div className="home-offer-container20"></div>
          </Link>
          <Link to="/">
            <div className="home-offer-container21"></div>
          </Link>
          <Link to="/">
            <div className="home-offer-container22"></div>
          </Link>
          <Link to="/">
            <div className="home-offer-container23"></div>
          </Link>
          <Link to="/">
            <div className="home-offer-container24"></div>
          </Link>
          <Link to="/">
            <div className="home-offer-container25"></div>
          </Link>
        </div>
        <div className="home-heading02"></div>
        <Offer
          Image="/screenshot%202023-10-24%20142136-1500w.png"
          Guides="18001801551-किसान कॉल सेंटर"
          Location="18001801551-KISAN CALL CENTRE"
          Description="GOVERMENT OF INDIA"
        ></Offer>
        <Offer
          Image="/screenshot%202023-10-24%20142136-1500w.png"
          Guides="1070 - प्राकृतिक आपदाओं के लिए राहत आयुक्त"
          Location=" 1070 -Relief Commissioner For Natural Calamities"
          Description="GOVERMENT OF INDIA"
          rootClassName="offer-root-class-name2"
        ></Offer>
      </section>
      <section id="tours" className="home-quick-view1">
        <div className="home-main3">
          <div className="home-heading03"></div>
          <Link to="/" className="home-navlink36">
            <div className="home-offer-container26"></div>
          </Link>
          <Link to="/rescue-image-1" className="home-find03 button">
            बाढ़ एवं अन्य आपदा से कैसे बचाव करें
          </Link>
        </div>
        <div className="home-main4">
          <div className="home-heading04"></div>
          <Link to="/" className="home-navlink37">
            <div className="home-offer-container27"></div>
          </Link>
          <h2 className="home-header02">जलप्रलयस्य सावधानताः</h2>
          <a
            href="https://imdnagpur.gov.in/docs_general/Floods_Dos_and_Donts.pdf"
            target="_blank"
            rel="noreferrer noopener"
            className="home-find04 button"
          >
            Find out more
          </a>
          <p className="home-caption03">
            शहरी बाढ़ की सावधानी और बाढ़ से पहले, बाढ़ के दौरान और बाद में। &gt;
            क्लिक करके आप वीडियो देख सकते हैं और बाढ़ से सावधान और शिक्षित हो
            सकते हैं। इसी तरह क्लिक करके &gt; अगले वीडियो पर जाएं और &lt; वापस
            वीडियो पर जाएं
          </p>
          <Slideshow rootClassName="slideshow-root-class-name"></Slideshow>
        </div>
      </section>
      <section className="home-testimonials">
        <div className="home-content02">
          <div className="home-heading05">
            <p className="home-quote">
              <br></br>
              <span>
                “यदा देशे स्वातन्त्र्यदिवसः आचर्यते तदा देशस्य अनेके भागाः
                प्रचण्डवृष्ट्या जलप्रलयस्य समस्यायाः सामनां कुर्वन्ति।जलप्रलयेन
                बहवः जनाः स्वप्राणान् त्यक्तवन्तः तथा च &apos;अहं तेषां मृत्युं
                शोकं करोमि&apos; .वयं प्रभावितैः सह पूर्णतया एकतायां तिष्ठामः
                जलप्रलयेन च अहं आश्वासयामि यत् यत्किमपि सम्भाव्यं समर्थनं
                आवश्यकं तत् सर्वं केन्द्रीयराज्यसर्वकारेण तेभ्यः प्रदत्तं
                भविष्यति” इति।.”
              </span>
            </p>
          </div>
          <div className="home-details">
            <div className="home-author">
              <img
                alt="image"
                src="/screenshot%202023-10-24%20162749-500h.png"
                className="home-image02"
              />
              <span className="home-name">
                <br className="home-text17"></br>
                <span className="home-text18">
                  श्री नरेन्द्र दामोदरदास मोदी
                </span>
                <br className="home-text19"></br>
                <br className="home-text20"></br>
                <span className="home-text21">भारतस्य प्रधानमन्त्री</span>
                <br className="home-text22"></br>
                <br className="home-text23"></br>
                <span className="home-text24"> </span>
                <br className="home-text25"></br>
                <span className="home-text26"> </span>
                <br className="home-text27"></br>
              </span>
            </div>
            <div className="home-controls"></div>
            <section className="home-testimonials1">
              <div className="home-content03">
                <div className="home-heading06">
                  <p className="home-quote1">
                    “सिक्किमस्य ल्होनाक्-सरोवरे मेघविस्फोटेन लाचेन्-उपत्यकायां
                    आकस्मिकजलप्रलयेन यत् विनाशः, प्राणहानिः च दुःखदः अस्ति
                    जलप्रलयेन सेनायाः कर्मचारिणः अदृश्याः इति केषाञ्चन
                    सेनाप्रतिष्ठानानां अपि बहुधा क्षतिः अभवत् । सर्वेषां
                    लापतानां सुरक्षां प्रार्थयामि, शोकग्रस्तपरिवारेभ्यः च अतीव
                    शोकसंवेदनां करोमि” इति ।.”
                  </p>
                </div>
                <div className="home-details1">
                  <div className="home-author1">
                    <img
                      alt="image"
                      src="/whatsapp%20image%202023-10-29%20at%2001.02.58_0303b514-400h.jpg"
                      className="home-image03"
                    />
                    <span className="home-name1">
                      <span className="home-text28">
                        श्रीमती द्रौपदी मुर्मू
                      </span>
                      <br className="home-text29"></br>
                      <br className="home-text30"></br>
                      <span className="home-text31">भारतस्य राष्ट्रपतिः</span>
                      <br className="home-text32"></br>
                      <span className="home-text33"> </span>
                      <br className="home-text34"></br>
                      <span className="home-text35"> </span>
                      <br className="home-text36"></br>
                    </span>
                  </div>
                  <div className="home-controls1"></div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
      <section className="home-testimonials2">
        <div className="home-content04">
          <div className="home-heading07">
            <p className="home-quote2">
              वसुधैव कुटुम्बकम ~ “the world is one (MY ) family”.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
          </div>
          <div className="home-details2">
            <div className="home-container08">
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1605292356183-a77d0a9c9d1d?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDV8fGluZGl8ZW58MHx8fHwxNjk4NTE4MTEwfDA&amp;ixlib=rb-4.0.3&amp;h=500"
                className="home-image04"
              />
              <div className="home-container09">
                <div className="home-author2">
                  <span className="home-name2">
                    <span>CITIZEN&apos;S OF  OUR </span>
                    <br></br>
                    <span>INDIA</span>
                    <br></br>
                  </span>
                </div>
              </div>
            </div>
            <div className="home-controls2"></div>
          </div>
        </div>
      </section>
      <section id="how-it-works" className="home-highlights">
        <div className="home-highlight">
          <div className="home-container10">
            <div className="home-container11">
              <div className="home-container12">
                <div className="home-content05">
                  <div className="home-heading08">
                    <h2 className="home-header03">2023 North India floods</h2>
                    <p className="home-caption04">
                      पाश्चात्य-विकारेन सह मिलित्वा मानसून-उत्थानस्य कारणेन अस्य
                      प्रदेशस्य केषुचित् भागेषु दशकेषु सर्वाधिकं वर्षा अभवत्,
                      येन समीपस्थानां नद्यः अतिप्रवाहः जातः, जलप्लावनेन
                      भूस्खलनेन च वाहनानि प्रक्षालितानि, सेतुः, मार्गाः च
                      नष्टाः, विद्युत्-विद्युत् च बाधिताः
                    </p>
                  </div>
                </div>
              </div>
              <a
                href="https://en.wikipedia.org/wiki/2023_North_India_floods "
                target="_blank"
                rel="noreferrer noopener"
                className="home-find05 button"
              >
                Read more
              </a>
            </div>
          </div>
          <div className="home-image05">
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1661868678303-493a20e5c4ca?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDl8fGZsb29kJTIwaW5kaWF8ZW58MHx8fHwxNjk5NTA4ODA0fDA&amp;ixlib=rb-4.0.3&amp;h=2000"
              className="home-image06"
            />
            <div className="home-rectangle">
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1661868678536-700da1f5e7fb?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEzfHxmbG9vZCUyMGluZGlhfGVufDB8fHx8MTY5OTUwODgwNHww&amp;ixlib=rb-4.0.3&amp;h=800"
                className="home-image07"
              />
            </div>
          </div>
        </div>
        <div className="home-highlight1">
          <div className="home-image08">
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1454789476662-53eb23ba5907?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fGN5Y2xvbmV8ZW58MHx8fHwxNjk5NTA5MzE0fDA&amp;ixlib=rb-4.0.3&amp;w=1500"
              className="home-image09"
            />
          </div>
          <div className="home-content06">
            <div className="home-heading09">
              <h2 className="home-header04">Cyclone Biparjoy</h2>
              <p className="home-caption05">
                <span>
                  अत्यन्तं तीव्रः चक्रवातः तूफानः बिपार्जोयः दीर्घायुषः,
                  शक्तिशाली उष्णकटिबंधीयचक्रवातः आसीत् यः पूर्वमध्य अरबसागरस्य
                  उपरि निर्मितः । २०२३ तमे वर्षे उत्तरहिन्दमहासागरस्य चक्रवातस्य
                  ऋतुस्य तृतीयः अवसादः द्वितीयः चक्रवाततूफानः च बिपरजोयस्य
                  उत्पत्तिः एकस्मात् अवसादात् अभवत् यस्य प्रथमवारं भारतस्य
                  मौसमविभागेन (IMD) ६ जून दिनाङ्के लक्षितम्, ततः पूर्वं
                  चक्रवातीतूफानरूपेण तीव्रताम् अवाप्तवान् गहनज्वलनसंवहनस्य
                  कारणेन चक्रवातः निरन्तरं दुर्बलः अभवत् । बाइपार्जोयः ईशानदिशि
                  त्वरितवान्, तृतीयश्रेणीसमतुल्य उष्णकटिबंधीयचक्रवातस्य अत्यन्तं
                  तीव्रचक्रवाततूफानस्य च कृते सुदृढः अभवत् । भारतस्य नलियानगरे
                  जूनमासस्य १६ दिनाङ्के अयं चक्रवातः स्थलप्रवेशं कृतवान्
                  ।बिपरजोय-नगरं अवसादरूपेण अवनतम्, ततः परं १९ जून-मासस्य अन्ते
                  सुचिह्नितनिम्नदाबक्षेत्रेण अवनतम् बाङ्गलादेशेन नामकृतस्य
                  बिपरजोयस्य अर्थः बङ्गलाभाषायां &apos;आपत्ति&apos; इति ।.
                </span>
                <br></br>
              </p>
            </div>
            <a
              href="https://en.wikipedia.org/wiki/Cyclone_Biparjoy"
              target="_blank"
              rel="noreferrer noopener"
              className="home-find06 button"
            >
              Read more
            </a>
          </div>
        </div>
      </section>
      <section id="how-it-works" className="home-highlights1">
        <div className="home-highlight2">
          <div className="home-content07">
            <div className="home-heading10">
              <h2 className="home-header05">2023 Sikkim flash floods</h2>
              <p className="home-caption06">
                २०२३ तमस्य वर्षस्य अक्टोबर्-मासस्य ४ दिनाङ्के प्रचण्डवृष्ट्या
                पूर्वोत्तरभारतस्य सिक्किम-राज्यस्य हिमवत्
                दक्षिण-ल्होनाक्-सरोवरस्य तटं भङ्गं कृत्वा हिमसरोवरस्य
                विस्फोटजलप्लावनम् अभवत् जलप्रलयः अर्धरात्रे चुङ्गथाङ्ग-नगरस्य
                तीस्ता-तृतीय-जलबन्धं प्राप्तवान्, ततः पूर्वं तस्य द्वारं
                उद्घाटयितुं शक्यते, येन जलबन्धः निमेषेषु नष्टः अभवत्
                ।तीस्तानद्याः अधः प्रवाहस्य जलस्तरः २० पादपर्यन्तं (६.१ मी.)
                यावत् वर्धितः, येन व्यापकं क्षतिः अभवत् ।इदं १९६८ तमे वर्षे
                सिक्किम-जलप्रलयस्य अनन्तरं क्षेत्रे घातकतमः जलप्लावनः यदा प्रायः
                १००० जनाः मृताः
              </p>
              <a
                href="https://en.wikipedia.org/wiki/2023_Sikkim_flash_floods"
                target="_blank"
                rel="noreferrer noopener"
                className="home-find07 button"
              >
                Read more
              </a>
            </div>
          </div>
          <div className="home-image10">
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1598801128222-35437cb2357f?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDI0fHxmbG9vZHxlbnwwfHx8fDE2OTk1MDk0NzF8MA&amp;ixlib=rb-4.0.3&amp;h=900"
              className="home-image11"
            />
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1621871567192-e29a9b8b5aee?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIxfHxmbG9vZHxlbnwwfHx8fDE2OTk1MDk0NzF8MA&amp;ixlib=rb-4.0.3&amp;w=400"
              className="home-image12"
            />
          </div>
        </div>
        <div className="home-highlight3">
          <div className="home-content08">
            <div className="home-heading11">
              <h2 className="home-header06">Cyclone Tauktae</h2>
              <p className="home-caption07">
                अत्यन्तं भयंकरः चक्रवातः तूफानः तौक्टाई (बर्मी उच्चारणः:
                [taʊʔtɛ̰][a]) अरबसागरस्य एकः शक्तिशाली, घातकः, हानिकारकः च
                उष्णकटिबंधीयचक्रवातः आसीत् यः १९९८ तमे वर्षे गुजरात-चक्रवातस्य
                अनन्तरं भारतस्य गुजरातराज्ये स्थलप्रवेशं कर्तुं प्रबलतमः
                उष्णकटिबंधीयः चक्रवातः अभवत् २] तथा भारतस्य पश्चिमतटं प्रभावितं
                कृत्वा सर्वाधिकप्रबलतमेषु उष्णकटिबंधीयचक्रवातेषु अन्यतमम् अस्ति
                तथा च सर्वेभ्यः अपि उपरि २०२१ तमे वर्षे उत्तरहिन्दमहासागरस्य
                चक्रवातस्य ऋतुस्य प्रबलतमः तूफानः आसीत् द्वितीयः अवसादः, प्रथमं
                चक्रवातीतूफानम्, प्रथमं तीव्रं चक्रवातीतूफानं, प्रथमं अत्यन्तं
                तीव्रं चक्रवातीतूफानं, २०२१ तमे वर्षे उत्तरहिन्दमहासागरस्य
                चक्रवातस्य ऋतुस्य प्रथमः अत्यन्तं तीव्रः चक्रवातीतूफानः, तौक्टाई
                अरबसागरे न्यूनदाबस्य क्षेत्रात् उत्पन्नः, यः प्रथमः आसीत्
                भारतस्य मौसमविभागेन 13 मे दिनाङ्के निगरानीयता कृता
              </p>
              <a
                href="https://en.wikipedia.org/wiki/Cyclone_Tauktae"
                target="_blank"
                rel="noreferrer noopener"
                className="home-find08 button"
              >
                Read more
              </a>
            </div>
          </div>
          <div className="home-image13">
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1600336153113-d66c79de3e91?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fGZsb29kfGVufDB8fHx8MTY5OTUwOTQ3MXww&amp;ixlib=rb-4.0.3&amp;h=900"
              className="home-image14"
            />
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1612038385745-53cfb4fbd19b?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDR8fGZsb29kfGVufDB8fHx8MTY5OTUwOTQ3MXww&amp;ixlib=rb-4.0.3&amp;w=400"
              className="home-image15"
            />
          </div>
        </div>
        <div className="home-highlight4">
          <div className="home-image16">
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1586813373421-c450ead2b91c?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDI4fHxmbG9vZHxlbnwwfHx8fDE2OTk1MTAwMDF8MA&amp;ixlib=rb-4.0.3&amp;h=800"
              className="home-image17"
            />
          </div>
          <div className="home-content09">
            <div className="home-heading12">
              <h2 className="home-header07">2023 Himalayan floods</h2>
              <p className="home-caption08">
                भारतीयहिमालयक्षेत्रे अगस्तमासस्य १४ दिनाङ्के जलप्लावनेन
                भूस्खलनेन न्यूनातिन्यूनं ७२ जनाः मृताः ।[१][२][३] हानिः १.२ अब्ज
                डॉलर इति अनुमानितम्, अनेकशतानि मार्गाणि अपि बन्दाः अभवन् ।
                हिमाचलप्रदेशस्य केषुचित् भागेषु १२ इञ्च् (३०० मि.मी.) अधिकं
                वर्षा अभवत् ।
              </p>
            </div>
            <a
              href="https://en.wikipedia.org/wiki/2023_Himalayan_floods"
              target="_blank"
              rel="noreferrer noopener"
              className="home-find09 button"
            >
              Read more
            </a>
          </div>
        </div>
      </section>
      <section id="destinations" className="home-destinations">
        <div className="home-video-details">
          <div className="home-heading13">
            <h2 className="home-header08">Spotlight flood</h2>
            <p className="home-caption09">
              Lorem ipsum dolor sit consectetur adipiscing elit, sed do eiusmod
              tempor incididunt.
            </p>
          </div>
          <div className="home-container13">
            <iframe
              src="https://www.youtube.com/embed/XAuf8o3ftIY?si=Nv7P84PX4GCtgfoZ"
              allow="accelerometer,autoplay"
              allowFullScreen
              className="home-iframe"
            ></iframe>
            <iframe
              src="https://www.youtube.com/embed/8FQn6LNDPHM?si=1c21TF7ezaDbHXVM"
              allow="accelerometer,autoplay"
              allowFullScreen
              className="home-iframe01"
            ></iframe>
          </div>
        </div>
        <p className="home-caption10">भारतस्य केचन जलप्रलयक्षेत्राणि</p>
        <div className="home-list">
          <Location
            Location="Gujrat,India"
            Background="https://images.unsplash.com/photo-1624030275207-77bac1c83be3?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fGR3YXJrYXxlbnwwfHx8fDE2OTgzNDE5ODh8MA&amp;ixlib=rb-4.0.3&amp;h=400"
          ></Location>
          <Link to="/" className="home-navlink38">
            <div className="home-location-wrapper">
              <Location
                Location="Bihar,India"
                Background="https://images.unsplash.com/photo-1540754231524-d3112fda810f?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEzfHxidWRkaGF8ZW58MHx8fHwxNjk4NTE5NDM2fDA&amp;ixlib=rb-4.0.3&amp;h=400"
              ></Location>
            </div>
          </Link>
          <Location
            Location="Orissa,India"
            Background="https://images.unsplash.com/photo-1598323646582-18d2101c9aad?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fG9kaXNoYXxlbnwwfHx8fDE2OTgzNDE3Mjl8MA&amp;ixlib=rb-4.0.3&amp;h=400"
          ></Location>
          <Location
            Location="Himachal pradesh,India"
            Background="https://images.unsplash.com/photo-1579409786113-a28ee835baf4?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEzfHxoaW1hY2hhbHxlbnwwfHx8fDE2OTg1MjAwODl8MA&amp;ixlib=rb-4.0.3&amp;h=400"
            rootClassName="location-root-class-name"
          ></Location>
          <Link to="/" className="home-navlink39">
            <div className="home-location-wrapper1">
              <Location
                Location="Punjab,india"
                Background="https://images.unsplash.com/photo-1623059508779-2542c6e83753?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDR8fHB1bmphYnxlbnwwfHx8fDE2OTg1MTk2ODN8MA&amp;ixlib=rb-4.0.3&amp;h=400"
              ></Location>
            </div>
          </Link>
          <div className="home-container14">
            <Link to="/" className="home-navlink40">
              <div className="home-location-wrapper2"></div>
            </Link>
            <Link to="/" className="home-navlink41">
              <div className="home-location-wrapper3"></div>
            </Link>
            <Link to="/" className="home-navlink42">
              <div className="home-location-wrapper4"></div>
            </Link>
          </div>
          <div className="home-container15">
            <Location
              Location="uttarakhand,India"
              Background="https://images.unsplash.com/photo-1612438214708-f428a707dd4e?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fHV0dGFyYWtoYW5kfGVufDB8fHx8MTY5ODM0MTI2OHww&amp;ixlib=rb-4.0.3&amp;h=400"
            ></Location>
            <Location
              Location="some other part's of India"
              Background="https://images.unsplash.com/photo-1532375810709-75b1da00537c?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fGluZGlhfGVufDB8fHx8MTY5ODMzOTAxOXww&amp;ixlib=rb-4.0.3&amp;h=400"
            ></Location>
            <Link to="/" className="home-navlink43">
              <div className="home-location-wrapper5"></div>
            </Link>
          </div>
        </div>
        <button className="home-find10 button">NDRF FLOOD ZONES </button>
      </section>
      <section id="guides" className="home-guides">
        <div className="home-heading14">
          <h2 className="home-header09">
            अस्माकं NDRF Hero&apos;s इत्यनेन सह मिलन्तु
          </h2>
          <p className="home-caption11">
            NDRF न केवलं Rescue दलं अपितु अस्माकं सर्वोत्तममित्राः वा कोऽपि
            परिवारस्य सदस्यः वा ईश्वरः यः अस्माकं जीवितस्य आशायां स्वजीवनस्य
            खतराम् अयच्छति।अत्र अस्मिन् विभागे वयं निरन्तरं भवतः सुझावेन भवतः
            ndrf नायकानां नाम योजयामः &amp; अत्र भवतः सम्मुखे तान् प्रशंसयामः
            सर्वे।
          </p>
        </div>
        <div className="home-list1">
          <Link to="/">
            <div className="home-guide-wrapper">
              <Guide
                Name="Late Sh. Nitya Nand Gupta"
                Location="cloudbrust at kedarnath -2013"
                Portrait="/whatsapp%20image%202023-10-29%20at%2000.58.15_a02b8361-1500w.jpg"
              ></Guide>
            </div>
          </Link>
          <Link to="/">
            <div className="home-guide-wrapper1">
              <Guide
                Name="Late. Sh.Bhim Singh"
                Location="Cloudbrust at  kedarnathvalley-2013"
                Portrait="/whatsapp%20image%202023-10-29%20at%2000.58.15_a02b8361-1500w.jpg"
                rootClassName="guide-root-class-name2"
              ></Guide>
            </div>
          </Link>
          <Guide
            Name="Late Sh. Shatish Kumar"
            Location="cloudbrust at kedarnath valley  - 2013"
            Portrait="/whatsapp%20image%202023-10-29%20at%2000.58.15_a02b8361-1500w.jpg"
          ></Guide>
          <Guide
            Name="Late Sh.Santosh kumar"
            Location="cloudbrust at kedarnath valley"
            Portrait="/whatsapp%20image%202023-10-29%20at%2000.58.15_a02b8361-1500w.jpg"
            rootClassName="guide-root-class-name3"
          ></Guide>
          <Link to="/">
            <div className="home-guide-wrapper2">
              <Guide
                Name="Late Sh. Basavarajyaragatti"
                Location="cloudbrust at kedarnath valley -2013"
                Portrait="/whatsapp%20image%202023-10-29%20at%2000.58.15_a02b8361-1500w.jpg"
                rootClassName="guide-root-class-name"
              ></Guide>
            </div>
          </Link>
          <Link to="/">
            <div className="home-guide-wrapper3">
              <Guide
                Name="Late Sh. Ahir Rao Ganesh"
                Location="Cloudbrust at kedarnath valley4ed4"
                Portrait="/whatsapp%20image%202023-10-29%20at%2000.58.15_a02b8361-1500w.jpg"
                rootClassName="guide-root-class-name1"
              ></Guide>
            </div>
          </Link>
          <Guide
            Name="Late Sh. oria Saroj kumar das"
            Location="Sikkim Flash Flood "
            Portrait="/whatsapp%20image%202023-10-29%20at%2000.58.15_a02b8361-1500w.jpg"
            rootClassName="guide-root-class-name5"
          ></Guide>
          <Guide
            Name="All NDRF TEAM"
            Location="ALL NDRF TEAM"
            Portrait="/whatsapp%20image%202023-10-29%20at%2000.58.15_a02b8361-1500w.jpg"
            rootClassName="guide-root-class-name4"
          ></Guide>
        </div>
        <div className="home-list2">
          <Link to="/">
            <div className="home-guide-wrapper4"></div>
          </Link>
          <Link to="/">
            <div className="home-guide-wrapper5"></div>
          </Link>
        </div>
      </section>
      <section id="guides" className="home-guides1">
        <div className="home-heading15">
          <h2 className="home-header10">
            अस्माकं NDRF Hero&apos;s इत्यनेन सह मिलन्तु
          </h2>
          <p className="home-caption12">
            NDRF न केवलं Rescue दलं अपितु अस्माकं सर्वोत्तममित्राः वा कोऽपि
            परिवारस्य सदस्यः वा ईश्वरः यः अस्माकं जीवितस्य आशायां स्वजीवनस्य
            खतराम् अयच्छति।अत्र अस्मिन् विभागे वयं निरन्तरं भवतः सुझावेन भवतः
            ndrf नायकानां नाम योजयामः &amp; अत्र भवतः सम्मुखे तान् प्रशंसयामः
            सर्वे।
          </p>
        </div>
        <iframe
          src="https://www.youtube.com/embed/vm7nDoxDR6U?si=Kk34fjthtomHN5yx"
          allow="accelerometer,autoplay"
          allowFullScreen
          className="home-iframe02"
        ></iframe>
        <iframe
          src="https://www.youtube.com/embed/a65r6fSzkfk?si=nqi3MkoPQ4llKrtm"
          allow="accelerometer,autoplay"
          allowFullScreen
          className="home-iframe03"
        ></iframe>
        <iframe
          src="https://www.youtube.com/embed/4Fow8DdhCpE?si=9DCovlGJVhj7rRPC"
          allow="accelerometer,autoplay"
          allowFullScreen
          className="home-iframe04"
        ></iframe>
        <iframe
          src="https://www.youtube.com/embed/7xcmOFSF_f8?si=UbfiVbkwvkvEj_Qj"
          allow="accelerometer,autoplay"
          allowFullScreen
          className="home-iframe05"
        ></iframe>
      </section>
      <section className="home-articles">
        <div id="articles" className="home-content10">
          <div className="home-heading16">
            <h2 className="home-header11">
              <span>#Ndrf # Ndrf operation Dost</span>
              <br></br>
              <span># Ndrf</span>
              <br></br>
            </h2>
          </div>
          <div className="home-list3">
            <div className="home-row">
              <iframe
                src="https://www.youtube.com/embed/QF3uIALYNyA?si=EVfyTGobrAL1zxze"
                allow="accelerometer,autoplay"
                allowFullScreen
                className="home-iframe06"
              ></iframe>
              <iframe
                src="https://www.youtube.com/embed/DTvatVHzNRo?si=KeKj5w-Gz2HoxN-e"
                allow="accelerometer,autoplay"
                allowFullScreen
                className="home-iframe07"
              ></iframe>
            </div>
            <div className="home-row1">
              <iframe
                src='https://www.youtube.com/embed/j2jofeB100I?si=SSs64i7NJrQgR4ug" title="YouTube video player'
                allow="accelerometer,autoplay"
                allowFullScreen
                className="home-iframe08"
              ></iframe>
              <iframe
                src="https://www.youtube.com/embed/EWU51EmqcHA?si=WE3Y3hDS65kI2Fou"
                allowFullScreen
                className="home-iframe09"
              ></iframe>
            </div>
            <div className="home-row2">
              <button className="home-read-all button-option button">
                Read all articles
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="home-faq">
        <div id="faqs" className="home-content11">
          <div className="home-heading17">
            <h2 className="home-header12">बहुधा पृष्टाः प्रश्नाः</h2>
            <p className="home-caption13">Frequently asked questions</p>
          </div>
          <div className="home-accordion">
            <div
              data-role="accordion-container"
              className="accordion home-element"
            >
              <div className="home-content12">
                <span className="home-header13">
                  क्या यह भारत सरकार की वेबसाइट है?
                </span>
                <span
                  data-role="accordion-content"
                  className="home-description"
                >
                  नहीं, यह भारत सरकार की वेबसाइट नहीं है। यह वर्तमान में एक निजी
                  वेबसाइट के रूप में चल रही है। लेकिन हो सकता है कि कुछ समय बाद
                  यह वेबसाइट भारत सरकार की वेबसाइट के रूप में काम करने लगे
                </span>
              </div>
              <div className="home-icon-container">
                <svg
                  viewBox="0 0 1024 1024"
                  data-role="accordion-icon-closed"
                  className="home-icon04"
                >
                  <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
                <svg
                  viewBox="0 0 1024 1024"
                  data-role="accordion-icon-open"
                  className="home-icon06"
                >
                  <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
              </div>
            </div>
            <div
              data-role="accordion-container"
              className="home-element1 accordion"
            >
              <div className="home-content13">
                <span className="home-header14">
                  आपने इस वेबसाइट में संस्कृत सामग्री क्यों जोड़ी है और इसके
                  कारण कुछ लोगों को भाषा समझने में कठिनाई होती है?
                </span>
                <span
                  data-role="accordion-content"
                  className="home-description1"
                >
                  मैं जानता हूं लेकिन याद रखें कि संस्कृत हमारी मातृभाषा है और
                  सबसे पुरानी भाषा भी है। यदि आपको यह समझ में नहीं आया है, तो आप
                  इसे खोजें और अंत में कुछ नया और अधिक रोमांचक सीखें
                </span>
              </div>
              <div className="home-icon-container1">
                <svg
                  viewBox="0 0 1024 1024"
                  data-role="accordion-icon-closed"
                  className="home-icon08"
                >
                  <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
                <svg
                  viewBox="0 0 1024 1024"
                  data-role="accordion-icon-open"
                  className="home-icon10"
                >
                  <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
              </div>
            </div>
            <div
              data-role="accordion-container"
              className="home-element2 accordion"
            >
              <div className="home-content14">
                <span className="home-header15">
                  वेबसाइट का उद्देश्य क्या है?
                </span>
                <span
                  data-role="accordion-content"
                  className="home-description2"
                >
                  इस वेबसाइट का मुख्य उद्देश्य हर किसी के जीवन को सुरक्षित करना
                  है, चाहे वह बादल फटने, अचानक मौसम परिवर्तन, बाढ़ या कुछ और हो!
                  .यह वेबसाइट अचानक कम से उच्च बचाव स्थिति को संभालने के लिए
                  जागरूकता, प्रशिक्षण प्रदान करती है
                </span>
              </div>
              <div className="home-icon-container2">
                <svg
                  viewBox="0 0 1024 1024"
                  data-role="accordion-icon-closed"
                  className="home-icon12"
                >
                  <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
                <svg
                  viewBox="0 0 1024 1024"
                  data-role="accordion-icon-open"
                  className="home-icon14"
                >
                  <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
              </div>
            </div>
            <div
              data-role="accordion-container"
              className="home-element3 accordion"
            >
              <div className="home-content15">
                <span className="home-header16">
                  क्या आप मुझे बता सकते हैं कि यह वेबसाइट कैसे काम करती है और
                  भविष्य में बाढ़ के दौरान यह मेरी कैसे मदद करेगी?
                </span>
                <span
                  data-role="accordion-content"
                  className="home-description3"
                >
                  <span>
                    ज़रूर, लेकिन पढ़ने से पहले कृपया स्वयं अन्वेषण करें। यह
                    वेबसाइट आपको सभी संबंधित जानकारी और बहुत कुछ प्रदान करती है।
                    इसलिए, मेरा सुझाव है कि कृपया इसका अन्वेषण करें।
                  </span>
                  <br className="home-text48"></br>
                  <br></br>
                  <span>
                    {' '}
                    यदि आपको बचाव से संबंधित किसी सहायता की आवश्यकता है तो बस
                    सहायता पर क्लिक करें। और आधार या मोबाइल नंबर के अंतिम 4 अंक,
                    बचाव का प्रकार जैसी जानकारी प्रदान करें, मानचित्र स्थान को
                    तुरंत देखें अर्थात सही है या नहीं और फिर सबमिट करें।
                  </span>
                  <br className="home-text51"></br>
                  <br></br>
                  <span>
                    {' '}
                    इससे पहले आपको अपने आधार कार्ड के साथ पंजीकरण करना होगा और
                    कुछ जानकारी प्रदान करनी होगी
                  </span>
                  <br className="home-text54"></br>
                  <br></br>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br className="home-text57"></br>
                  <br></br>
                  <span>
                    {' '}
                    अभी इसका परीक्षण चल रहा है, इसलिए कोई नई जानकारी न भरें
                  </span>
                </span>
              </div>
              <div className="home-icon-container3">
                <svg
                  viewBox="0 0 1024 1024"
                  data-role="accordion-icon-closed"
                  className="home-icon16"
                >
                  <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
                <svg
                  viewBox="0 0 1024 1024"
                  data-role="accordion-icon-open"
                  className="home-icon18"
                >
                  <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
              </div>
            </div>
            <div
              data-role="accordion-container"
              className="home-element4 accordion"
            >
              <div className="home-content16">
                <span className="home-header17">
                  आप केवल बाढ़ से संबंधित सामग्री ही क्यों जोड़ते हैं, लेकिन
                  उल्लेख करें कि यह एक बचाव वेबसाइट है
                </span>
                <span
                  data-role="accordion-content"
                  className="home-description4"
                >
                  <br></br>
                  <span>
                    {' '}
                    कुछ दिनों या महीनों के बाद इसे रेस्क्यू वेबसाइट में बदला जा
                    सकता है
                  </span>
                </span>
              </div>
              <div className="home-icon-container4">
                <svg
                  viewBox="0 0 1024 1024"
                  data-role="accordion-icon-closed"
                  className="home-icon20"
                >
                  <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
                <svg
                  viewBox="0 0 1024 1024"
                  data-role="accordion-icon-open"
                  className="home-icon22"
                >
                  <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="find" className="home-find11">
        <div className="home-heading18">
          <h2 className="home-header18">Incrediable ! India</h2>
          <p className="home-caption14">
            <span>उत्तरं यत्समुद्रस्य हिमाद्रेश्चैव दक्षिणम् ।</span>
            <br></br>
            <span>वर्षं तद् भारतं नाम भारती यत्र संततिः ।।</span>
          </p>
        </div>
        <a href="#articles" className="home-find12 button">
          The country (Varsam) that lies north of the ocean and south of the
          snowy mountains is called Bharatam; there live the descendants of
          Bharata. Constitutionally, Bharat is the official Sanskrit name of the
          country, Bharat Ganarajya; Republic of India
        </a>
      </section>
      <section className="home-footer">
        <span>Text</span>
        <div className="home-content17">
          <div className="home-main5">
            <div className="home-branding">
              <div className="home-heading19">
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1587011158961-5f27e4578293?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDZ8fHBlYWNvY2t8ZW58MHx8fHwxNjk5ODA5ODk1fDA&amp;ixlib=rb-4.0.3&amp;w=1200"
                  className="home-image18"
                />
                <span className="home-text66">
                  <span>
                    For Any Imformation related to content/suggestion/copyright
                    call us : 7260968719
                  </span>
                  <br className="home-text68"></br>
                  <br></br>
                  <span>
                    or email us YOUR SUGGESTION OR REVIEW  WE LOVE TO  READ
                    &amp; IMPLEMENT IT : rashmisingh00001@outlook.com
                  </span>
                </span>
              </div>
            </div>
            <div className="home-links1">
              <div className="home-items">
                <button className="home-link08 button button-clean">
                  MESSAGE
                </button>
                <a
                  href="#destinations"
                  className="home-link09 button button-clean"
                >
                  other disaster rescue
                </a>
              </div>
              <div className="home-items1">
                <Link
                  to="/register"
                  className="home-link10 button button-clean"
                >
                  Registration
                </Link>
                <Link
                  to="/importance"
                  className="home-link11 button button-clean"
                >
                  Importance
                </Link>
                <Link
                  to="/weather-alert"
                  className="home-link12 button button-clean"
                >
                  Weather alert
                </Link>
                <Link
                  to="/rescue-image-1"
                  className="home-link13 button button-clean"
                >
                  flood  &amp; its rescue
                </Link>
              </div>
              <div className="home-items2">
                <Link
                  to="/about-us"
                  className="home-link14 button button-clean"
                >
                  About us
                </Link>
                <Link
                  to="/picture-of-memory"
                  className="home-link15 button button-clean"
                >
                  Memories
                </Link>
                <a href="#faqs" className="home-link16 button button-clean">
                  Faqs
                </a>
                <button className="home-link17 button button-clean">
                  Careers
                </button>
              </div>
            </div>
          </div>
          <span className="home-copyright">
            © 2023 Kutumbakam Setu. All Rights Reserved.
          </span>
          <Link to="/" className="home-navlink50">
            <div className="home-offer-container28"></div>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home
