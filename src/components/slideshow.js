import React, { useState } from 'react'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import './slideshow.css'

const Slideshow = (props) => {
  const [slider, setSlider] = useState(1)
  return (
    <div className={`slideshow-container ${props.rootClassName} `}>
      <div className="slideshow-container1">
        <div className="slideshow-container2">
          <React.Fragment>
            <React.Fragment>
              <style
                dangerouslySetInnerHTML={{
                  __html:
                    '\n        /* Style the slider container */\n        .slider {\n            width: 600px;\n            height: 400px;\n            margin: auto;\n            position: relative;\n            overflow: hidden;\n        }\n\n        /* Style the slides */\n        .slide {\n            width: 600px;\n            height: 400px;\n            display: none;\n        }\n\n        /* Style the video iframe */\n        .video {\n            width: 100%;\n            height: 100%;\n        }\n\n        /* Style the navigation buttons */\n        .prev, .next {\n            width: 50px;\n            height: 50px;\n            background-color: rgba(0, 0, 0, 0.5);\n            color: white;\n            font-size: 30px;\n            text-align: center;\n            line-height: 50px;\n            cursor: pointer;\n            position: absolute;\n            top: 50%;\n            transform: translateY(-50%);\n            z-index: 1;\n        }\n\n        .prev {\n            left: 0;\n        }\n\n        .next {\n            right: 0;\n        }\n\n        /* Style the dots indicator */\n        .dots {\n            width: 100%;\n            height: 20px;\n            margin: 0;\n            padding: 0;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            position: absolute;\n            bottom: 10px;\n            z-index: 1;\n        }\n\n        .dot {\n            width: 10px;\n            height: 10px;\n            border-radius: 50%;\n            background-color: rgba(0, 0, 0, 0.5);\n            margin: 5px;\n            cursor: pointer;\n        }\n\n        .active {\n            background-color: white;\n        }\n    ',
                }}
              />

              {/* Create a slider container */}
              <div className="slider">
                {/* Create four slides with YouTube videos */}
                <div className="slide">
                  <iframe
                    className="video"
                    src="https://www.youtube.com/embed/YDMux2p3ruw?ecver=2&enablejsapi=1"
                  />
                  <p>
                    This video shows how to make a simple and delicious
                    chocolate cake.
                  </p>
                </div>
                <div className="slide">
                  <iframe
                    className="video"
                    src="https://www.youtube.com/embed/9bpOetcrKdU?ecver=2&enablejsapi=1"
                  />
                  <p>This video shows how to play the guitar for beginners.</p>
                </div>
                <div className="slide">
                  <iframe
                    className="video"
                    src="https://www.youtube.com/embed/BkBMWJc_9Xc?ecver=2&enablejsapi=1"
                  />
                  <p>
                    This video shows how to do yoga for relaxation and stress
                    relief.
                  </p>
                </div>
                <div className="slide">
                  <iframe
                    className="video"
                    src="https://www.youtube.com/embed/fzlDHUIXLNE?ecver=2&enablejsapi=1"
                  />
                  <p>
                    This video shows how to draw a realistic eye with pencil.
                  </p>
                </div>
                {/* Create navigation buttons */}
                <div className="prev" onClick="prevSlide()">
                  &lt;
                </div>
                <div className="next" onClick="nextSlide()">
                  &gt;
                </div>
                {/* Create dots indicator */}
                <ul className="dots">
                  <li className="dot active" onClick="showSlide(1)" />
                  <li className="dot" onClick="showSlide(2)" />
                  <li className="dot" onClick="showSlide(3)" />
                  <li className="dot" onClick="showSlide(4)" />
                </ul>
              </div>
              {/* Add JavaScript code */}
              <Script>{`
        // Get the slider elements
        var slider = document.querySelector(".slider");
        var slides = document.querySelectorAll(".slide");
        var videos = document.querySelectorAll(".video");
        var prev = document.querySelector(".prev");
        var next = document.querySelector(".next");
        var dots = document.querySelectorAll(".dot");

        // Initialize the slider index and the YouTube players
        var slideIndex = 1;
        var players = [];

        // Load the YouTube iFrame API
        var tag = document.createElement("script");
        tag.src = "https://www.youtube.com/iframe_api";
        var firstScriptTag = document.getElementsByTagName("script")[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        // Create YouTube players for each video
        function onYouTubeIframeAPIReady() {
            for (var i = 0; i < videos.length; i++) {
                players[i] = new YT.Player(videos[i], {
                    events: {
                        "onStateChange": onPlayerStateChange
                    }
                });
            }
        }

        // Stop the video when it ends or when the slide changes
        function onPlayerStateChange(event) {
            if (event.data == YT.PlayerState.ENDED || event.data == YT.PlayerState.PAUSED) {
                stopVideo(event.target);
            }
        }

        // Stop the video and hide the controls
        function stopVideo(player) {
            player.stopVideo();
            player.getIframe().removeAttribute("controls");
        }

        // Show the first slide
        showSlide(slideIndex);

        // Define a function to show a specific slide
        function showSlide(n) {
            // Loop around if n is out of range
            if (n > slides.length) {
                slideIndex = 1;
            }
            if (n < 1) {
                slideIndex = slides.length;
            }
            // Hide all slides and stop all videos
            for (var i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
                stopVideo(players[i]);
            }
            // Remove the active class from all dots
            for (var i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            // Show the current slide and add the active class to the corresponding dot
            slides[slideIndex - 1].style.display = "block";
            dots[slideIndex - 1].className += " active";
        }

        // Define a function to change the slide by a given offset
        function changeSlide(n) {
            showSlide(slideIndex += n);
        }

        // Define a function to show the previous slide
        function prevSlide() {
            changeSlide(-1);
        }

        // Define a function to show the next slide
        function nextSlide() {
            changeSlide(1);
        }
    `}</Script>
            </React.Fragment>
          </React.Fragment>
        </div>
      </div>
    </div>
  )
}

Slideshow.defaultProps = {
  text11: 'Text',
  image_src11: 'https://play.teleporthq.io/static/svg/default-img.svg',
  heading11: 'Heading',
  image_src111: 'https://play.teleporthq.io/static/svg/default-img.svg',
  image_alt1: 'image',
  image_alt111: 'image',
  image_src1: 'https://play.teleporthq.io/static/svg/default-img.svg',
  text: 'Text',
  text1: 'Text',
  image_alt11: 'image',
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  image_alt: 'image',
  rootClassName: '',
  heading1: 'Heading',
  heading:
    "“When the country is celebrating 73rd Independence day, Many parts of the country is facing the problem of floods due to heavy rains.many people have lost their lives in the floods and 'I condole their death' .We stand in complete solidarity with those affected by the floods and I assure that all possible support that is needed will be provided to them by the central and the state governments.”",
}

Slideshow.propTypes = {
  text11: PropTypes.string,
  image_src11: PropTypes.string,
  heading11: PropTypes.string,
  image_src111: PropTypes.string,
  image_alt1: PropTypes.string,
  image_alt111: PropTypes.string,
  image_src1: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  image_alt11: PropTypes.string,
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  rootClassName: PropTypes.string,
  heading1: PropTypes.string,
  heading: PropTypes.string,
}

export default Slideshow
