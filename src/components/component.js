import React from 'react'

import Script from 'dangerous-html/react'

import './component.css'

const AppComponent = (props) => {
  return (
    <div className="app-component-container">
      <div className="app-component-container1">
        <div className="app-component-container2">
          <React.Fragment>
            <React.Fragment>
              <meta charSet="UTF-8" />
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
              />
              <title>Quick Help Form</title>
              {/* Add the Microsoft Excel URL in the action attribute of the form */}
              <form
                id="quickHelpForm"
                action="https://1drv.ms/x/s!AoJ5ZI_HvGj2hSVrwfxbQfECS9o6?e=Lc6lQp&nav=MTVfezcxQ0Q1MDJFLTU2MUItNDVBMC04REJCLUZCMjg4NjMxRUI2Qn0"
                method="post"
              >
                <label htmlFor="id">ID (4 digits):</label>
                <input
                  type="text"
                  id="id"
                  name="id"
                  pattern="\\d{4}"
                  required={true}
                />

                <label htmlFor="mobileNumber">Mobile Number (10 digits):</label>
                <input
                  type="tel"
                  id="mobileNumber"
                  name="mobileNumber"
                  pattern="\\d{10}"
                  required={true}
                />

                <label htmlFor="disasterType">Disaster Type:</label>
                <select id="disasterType" name="disasterType" required={true}>
                  <option value="" disabled={true} selected={true}>
                    Select a disaster type
                  </option>
                  <option value="Health Emergency Issue">
                    Health Emergency Issue
                  </option>
                  <option value="Tsunami Related Issue">
                    Tsunami Related Issue
                  </option>
                  <option value="Wildfire">Wildfire</option>
                  <option value="Storm">Storm</option>
                  {/* Add the rest of the disaster types */}
                </select>

                {/* Add a button to get the user's location */}
                <button type="button" onClick="getLocation()">
                  Get My Location
                </button>

                {/* Display the user's location */}
                <p id="location" />

                <input type="submit" defaultValue="Submit" />
              </form>

              <Script>{`
        function getLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(showPosition);
            } else {
                alert("Geolocation is not supported by this browser.");
            }
        }

        function showPosition(position) {
            // Display the user's location in the "location" paragraph
            document.getElementById("location").innerHTML = "Location: " + position.coords.latitude + ", " + position.coords.longitude;
        }
    `}</Script>

              {/* Add any additional styling or content as needed */}
            </React.Fragment>
          </React.Fragment>
        </div>
      </div>
    </div>
  )
}

export default AppComponent
