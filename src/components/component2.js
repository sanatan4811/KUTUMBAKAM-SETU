import React from 'react'

import Script from 'dangerous-html/react'

import './component2.css'

const Component2 = (props) => {
  return (
    <div className="component2-container">
      <div className="component2-container1">
        <div className="component2-container2">
          <React.Fragment>
            <React.Fragment>
              <style
                dangerouslySetInnerHTML={{
                  __html:
                    '\n    body {\n      font-family: Arial, sans-serif;\n    }\n\n    h1 {\n      text-align: center;\n    }\n\n    form {\n      width: 500px;\n      margin: 0 auto;\n      padding: 20px;\n      border: 1px solid #ccc;\n    }\n\n    label {\n      display: block;\n      margin-bottom: 10px;\n    }\n\n    input, select {\n      width: 100%;\n      padding: 10px;\n      border: 1px solid #ccc;\n    }\n\n    button {\n      width: 100%;\n      padding: 10px;\n      background-color: blue;\n      color: white;\n      border: none;\n    }\n\n    #map {\n      width: 500px;\n      height: 300px;\n      margin: 10px auto;\n    }\n  ',
                }}
              />

              <h1>Quick Help Form</h1>
              <form id="form">
                <label htmlFor="id">
                  Enter your 4 digit id or 10 digit mobile number:
                </label>
                <input
                  type="text"
                  id="id"
                  name="id"
                  required={true}
                  pattern="\\d{4}|\\d{10}"
                  title="Please enter a valid 4 digit id or 10 digit mobile number"
                />
                <label htmlFor="disaster">Select the disaster type:</label>
                <select id="disaster" name="disaster" required={true}>
                  <option value="">--Please choose an option--</option>
                  <option value="1">HEALTH EMERGENCY ISSUE</option>
                  <option value="2">TSUNAMI RELATED ISSUE</option>
                  <option value="3">WILDFIRE</option>
                  <option value="4">STORM</option>
                  <option value="5">EMERGENCY RELATED TO HAZARDS</option>
                  <option value="6">STORM</option>
                  <option value="7">THUNDERSTORM</option>
                  <option value="8">SHELTER</option>
                  <option value="9">FIRE</option>
                  <option value="10">HAIL STORM</option>
                  <option value="11">LAND SLIDE</option>
                  <option value="12">EARTHQUAKE</option>
                  <option value="13">CYCLONE</option>
                  <option value="14">SHELTER & FOOD RELATED</option>
                  <option value="15">FLASH FLOOD</option>
                  <option value="16">FIRE</option>
                  <option value="17">VOLCANIC ERUPTION</option>
                  <option value="18">TORNADO</option>
                  <option value="19">FLOOD</option>
                  <option value="20">VOLCANIC ERUPTION</option>
                  <option value="21">WILDFIRE</option>
                </select>
                <button type="submit" id="submit">
                  Send
                </button>
              </form>
              <div id="map" />
              <Script>{`
    // Initialize the map
    var map = L.map('map').setView([0, 0], 1);

    // Add a tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Get the user location
    navigator.geolocation.getCurrentPosition(function(position) {
      // Set the map view to the user location
      map.setView([position.coords.latitude, position.coords.longitude], 13);

      // Add a marker to the user location
      L.marker([position.coords.latitude, position.coords.longitude]).addTo(map)
        .bindPopup('You are here').openPopup();
    });

    // Get the form element
    var form = document.getElementById('form');

    // Add a submit event listener
    form.addEventListener('submit', function(event) {
      // Prevent the default form submission
      event.preventDefault();

      // Get the form data
      var id = form.elements['id'].value;
      var disaster = form.elements['disaster'].value;

      // Validate the form data
      if (id && disaster) {
        // Send the form data to the email using an API
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://api.emailjs.com/api/v1.0/email/send');
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify({
          service_id: 'service_xxxxxx', // Replace with your service ID
          template_id: 'template_xxxxxx', // Replace with your template ID
          user_id: 'user_xxxxxx', // Replace with your user ID
          template_params: {
            to_email: 'vasudevkutubakam@gmail.com',
            id: id,
            disaster: disaster
          }
        }));

        // Show a success message
        alert('Your form has been sent successfully');
      } else {
        // Show an error message
        alert('Please fill in all the fields');
      }
    });
  `}</Script>
            </React.Fragment>
          </React.Fragment>
        </div>
      </div>
    </div>
  )
}

export default Component2
