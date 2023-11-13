import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './register.css'

const REGISTER = (props) => {
  return (
    <div className="register-container">
      <Helmet>
        <title>REGISTER - KUTUBAKAM SETU</title>
        <meta property="og:title" content="REGISTER - KUTUBAKAM SETU" />
      </Helmet>
      <h1 className="register-text">स्वागतम्</h1>
      <Link to="/" className="register-navlink">
        <svg viewBox="0 0 1024 1024" className="register-icon">
          <path d="M225.835 286.165l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l225.835-225.835 225.835 225.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-225.835-225.835 225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-225.835 225.835-225.835-225.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
        </svg>
      </Link>
      <div className="register-container1">
        <div className="register-container2">
          <React.Fragment>
            <React.Fragment>
              <Script>{`
// Function to check the credentials and redirect to the next page
function login() {
  // Get the username and password from the input fields
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  // Compare them with the predefined values
  if (username == "Ndrf4811" && password == "Shriram1206@") {
    // If they match, redirect to the next page
    window.location.href = "nextpage.html";
  } else {
    // If they don't match, display an alert message
    alert("Invalid username or password!");
  }
}
`}</Script>

              <h1>Website Registration Login Page</h1>
              <form>
                <p>
                  Username: <input type="text" id="username" />
                </p>
                <p>
                  Password: <input type="password" id="password" />
                </p>
                <p>
                  <input
                    type="button"
                    defaultValue="Submit"
                    onClick="login()"
                  />
                </p>
              </form>
            </React.Fragment>
          </React.Fragment>
        </div>
      </div>
    </div>
  )
}

export default REGISTER
