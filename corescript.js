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
// Implemented as in this video: https://www.youtube.com/watch?v=wPElVpR1rwA
window.addEventListener('load', ()=> {
  let temperatureDegree = document.querySelector(".temperature-degree");
  let temperatureDescription = document.querySelector(".temperature-description");

  // Dark Sky don't allow you to use their API locally, so we're using a proxy to get around that. That's all.
  const proxy = 'https://cors-anywhere.herokuapp.com/';

  // Get the weather data from Dark Sky, adding query at the end to convert temperature to celsius
  const api = `${proxy}https://api.darksky.net/forecast/93ffed5f34bbe89be13aa16f7cff06e7/39.110510,1.517750?units=si`;

  // This is where we do the main API work
  // We fetch the Dark Sky api info from the const we've set above
  fetch(api)
    // the data takes a little time to arrive, so we use .then below to say once we've got it to then do something with it
    .then(response =>{ // "response" here is just a variable we're creating on the fly
      // once we have the response, convert it to json so it can be used
      return response.json();
    })
    // once we've converted to json, create a variable and access properties we need
    .then(data =>{
      temperatureDegree.textContent = Math.round(data.currently.temperature);
      temperatureDescription.textContent = data.currently.summary;
        // Set icon
        setIcons(data.currently.icon, document.querySelector('.icon'));
    })

  // TODO: Need to add icon based on the current weather: https://youtu.be/wPElVpR1rwA?t=1583
  function setIcons(icon, iconID){
    const skycons = new Skycons({color: "white"});
    const currentIcon = icon.replace(/-/g, "_").toUpperCase();
    skycons.play();
    return skycons.set(iconID, Skycons[currentIcon]);
  }
});

/* END Dark Sky API */
