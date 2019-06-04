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

  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(position =>{
      long = position.coords.longitude;
      lat = position.coords.latitude;

      const api = `https://api.darksky.net/forecast/93ffed5f34bbe89be13aa16f7cff06e7/-2.3448431,53.383696099999995`;
    });

    fetch(api)
      // the data takes a little time to arrive, so we use .then below to say once we've got it to then do something with it
      .then(response =>{

      })
  }
});

/* END Dark Sky API */
