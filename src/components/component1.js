import React from 'react'

import Script from 'dangerous-html/react'

import './component1.css'

const Component1 = (props) => {
  return (
    <div className="component1-container">
      <div className="component1-container1">
        <div className="component1-container2">
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
                  __html: '\n        /* Add any custom styling here */\n    ',
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
            
            // Get form data
            var id = document.getElementById("id").value;
            var mobileNumber = document.getElementById("mobileNumber").value;
            var disasterType = document.getElementById("disasterType").value;
            var location = document.getElementById("location").innerHTML;

            // Prepare data for sending
            var formData = {
                id: id,
                mobileNumber: mobileNumber,
                disasterType: disasterType,
                location: location
            };

            // Send the data to the server using AJAX
            var xhr = new XMLHttpRequest();
            xhr.open("POST", "submit_form.php", true);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.send(JSON.stringify(formData));

            // Display a thank you message (you can customize this part)
            alert("Thank you for submitting the form!");
            <?php
// Get form data
\$data = json_decode(file_get_contents("https://1drv.ms/x/s!AoJ5ZI_HvGj2hSVrwfxbQfECS9o6?e=XlMZwi&nav=MTVfezcxQ0Q1MDJFLTU2MUItNDVBMC04REJCLUZCMjg4NjMxRUI2Qn0"), true);

// Open the CSV file for writing
\$file = fopen('form_data.csv', 'a');

// Write data to the file
fputcsv(\$file, [\$data['id'], \$data['mobileNumber'], \$data['disasterType'], \$data['location']]);

// Close the file
fclose(\$file);

// Respond with a success message
echo json_encode(['message' => 'Form data successfully submitted.']);
?>

        }
    `}</Script>
            </React.Fragment>
          </React.Fragment>
        </div>
      </div>
    </div>
  )
}

export default Component1
