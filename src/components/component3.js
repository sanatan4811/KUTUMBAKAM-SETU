import React from 'react'

import Script from 'dangerous-html/react'

import './component3.css'

const Component3 = (props) => {
  return (
    <div className="component3-container">
      <div className="component3-container1">
        <div className="component3-container2">
          <React.Fragment>
            <React.Fragment>
              <meta charSet="UTF-8" />
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
              />
              <title>Quick Help Form</title>
              <style
                dangerouslySetInnerHTML={{
                  __html:
                    '\n      input [text= text] {\n        width: 100%;\n        padding: 12px 20px\n        margin: 8px 0px\n        browser-sizing: border-box;           \n      }  /* Add any custom styling here */\n      .button{\n        background-colour : #24a0ed \n      }\n    ',
                }}
              />

              <form id="quickHelpForm" onSubmit="submitForm(event)">
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
                  <option value="THUNDERSTORM">THUNDERSTORM</option>
                  <option value="SHELTER  & FOOD DURING DISASTER ">
                    SHELTER & FOOD DURING DISASTER{' '}
                  </option>
                  <option value="FLASH FLOOD">FLASH FLOOD</option>
                  <option value="LAND-SLIDE">LAND-SLIDE</option>
                  <option value="FLOOD">FLOOD</option>
                  <option value="HEAVY RAINFALL">HEVY RAINFALL</option>
                  <option value="EARTH-QUAKE">EARTH EARTH-QUAKE</option>
                  <option value="TORNADO">TORNADO</option>
                  <option value="DROUGHT">DROUGHT</option>
                  <option value="FIRE">FIRE</option>
                  <option value="CYCLONES">CYCLONES</option>
                  <option value="CBRN(CHEMICAL,BIOLOGICAL,RADIOLOGICAL& NUCLEAR CHALLANGES)">
                    CBRN
                  </option>
                  <option value="DISTRIBUTION OF RELIEF MATERIALS DURING DISASTER">
                    DISTRIBUTION OF RELIEF MATERIALS DURING DISASTER
                  </option>
                  <option value="SEARCH & RESCUE OF UNKNOWN PERSON DURING DISASTER">
                    SEARCH & RESCUE OF UNKNOWN PERSON DURING DISASTER
                  </option>
                  <option value="DEATH REPORT DURING DISASTER">
                    DEATH REPORT DURING DISASTER
                  </option>
                  <option value="Emergency sanitation /Fallen into a pit/ other's">
                    Fallen into a pit
                  </option>

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

        function submitForm(event) {
            event.preventDefault(); // Prevent the form from submitting normally
            
            // You can add code here to send the form data to Microsoft Excel
            // For example, using AJAX to send the data to a PHP script
            var formData = new FormData(document.getElementById("quickHelpForm"));

            // Example using XMLHttpRequest
            var xhr = new XMLHttpRequest();
            xhr.open("POST", "excel_submit.php", true);
            xhr.send(formData);

            // Display a thank you message (you can customize this part)
            alert("Thank you for submitting the form!");
        }
    `}</Script>
            </React.Fragment>
          </React.Fragment>
        </div>
      </div>
    </div>
  )
}

export default Component3
