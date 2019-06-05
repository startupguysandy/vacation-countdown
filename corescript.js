/* START Date Calculations */
// Set the date we're counting down to
var countDownDate = new Date("Sept 15, 2019").getTime();
var now = new Date().getTime();

// Find the distance between now and the count down date
var distance = countDownDate - now;

// Time calculations for days, hours, minutes and seconds
var days = Math.floor(distance / (1000 * 60 * 60 * 24));

document.getElementById("daysUntil").innerHTML = days;

/* END Date Calculations */


/* START Dark Sky API */
// Using this video as tutorial: https://www.youtube.com/watch?v=wPElVpR1rwA
// Got this far: https://youtu.be/wPElVpR1rwA?t=1046
window.addEventListener('load', ()=> {
  // location of office in altrincham as ref: -2.3448431 53.383696099999995
  // get current location data using vanilla JS
  let long;
  let lat;
  let temperatureDescription = document.querySelector(".temperature-description");
  let temperatureDegree = document.querySelector(".temperature-degree");

  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(position =>{
      long = position.coords.longitude;
      lat = position.coords.latitude;

      // Dark Sky don't allow you to use their API locally, so we're using a proxy to get around that. That's all.
      const proxy = 'https://cors-anywhere.herokuapp.com/';

      // Get the weather data from Dark Sky, adding query at the end to convert temperature to celsius
      const api = `${proxy}https://api.darksky.net/forecast/93ffed5f34bbe89be13aa16f7cff06e7/${lat},${long}?units=si`;

      // This is where we do the main API work
      // We fetch the Dark Sky api info from the const we've set above
      fetch(api)
        // the data takes a little time to arrive, so we use .then below to say once we've got it to then do something with it
        .then(response =>{
          return response.json();
        })
        .then(data =>{
          console.log(data);
          // const {temperature, summary} = data.currently.temperature;
          // Set DOM Elements from the API
          temperatureDegree.textContent = data.currently.temperature;
        })
    });

  }
});

/* END Dark Sky API */
