let header = document.getElementById("header");
let cyber = document.getElementById("cyber");
let road = document.getElementById("road");
let semi = document.getElementById("semi");
let model = document.getElementById("model");
let zero = document.getElementById("zero");
let speed = document.getElementById("speed");
let range = document.getElementById("range");

cyber.onclick = function() {
  header.style.backgroundImage = "url(https://carwow-uk-wp-1.imgix.net/Cybertruck-4-e1612178090276.png?auto=format&cs=tinysrgb&fit=crop&h=800&ixlib=rb-1.1.0&q=60&w=1600)";
  model.innerHTML = "Cybertruck";
  zero.innerHTML = "2.9s";
  speed.innerHTML = "130 mph";
  range.innerHTML = "502 mi";
}
road.onclick = function() {
  header.style.backgroundImage = "url(https://s3-prod.autonews.com/s3fs-public/54ROADSTER-MAIN_i.jpg)";
  model.innerHTML = "Roadster";
  zero.innerHTML = "1.9s";
  speed.innerHTML = "250 mph";
  range.innerHTML = "620 mi";
}
semi.onclick = function() {
  header.style.backgroundImage = "url(https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/semi-2-1627393271.jpg)";
  model.innerHTML = "Semi";
  zero.innerHTML = "5s";
  speed.innerHTML = "65 mph";
  range.innerHTML = "520 mi";
}
