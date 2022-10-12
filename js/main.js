let Container = document.querySelector(".main"); // parent div
let nouvil = document.querySelector(".nouvil"); // h2

let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let mountains3 = document.getElementById("mountains3");
let mountains4 = document.getElementById("mountains4");
let river = document.getElementById("river");
let boat = document.getElementById("boat");
let mountains7 = document.getElementById("mountains7");

window.onscroll = function () {
  let value = scrollY;
  stars.style.left = value + "px";
  moon.style.top = value * 2 + "px";
  mountains3.style.top = value * 1.5 + "px";
  mountains4.style.top = value * 1.3 + "px";
  river.style.top = value + "px";
  boat.style.left = value * 2 + "px";
  boat.style.top = value + "px";
  nouvil.style.fontSize = value + "px";
  if (scrollY >= 67) {
    nouvil.style.fontSize = 67 + "px";
    nouvil.style.position = "fixed";
    if (scrollY >= 400) {
      nouvil.style.display = "none";
    } else {
      nouvil.style.display = "block";
    }
    if (scrollY >= 124) {
      Container.style.background = "linear-gradient(#376281, #10001f)";
    } else {
      document.querySelector(".main").style.background =
        "linear-gradient(#200016, transparent);";
      
    }
  }
};
