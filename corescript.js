// Set the date we're counting down to
var countDownDate = new Date("Sept 15, 2019").getTime();
var now = new Date().getTime();

// Find the distance between now and the count down date
var distance = countDownDate - now;

// Time calculations for days, hours, minutes and seconds
var days = Math.floor(distance / (1000 * 60 * 60 * 24));

document.getElementById("daysUntil").innerHTML = days;
