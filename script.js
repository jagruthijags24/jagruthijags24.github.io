const nav = document.querySelector(".navLinks");
const menu = document.querySelector(".menu");
const main = document.querySelector("main");
const hc = document.querySelector("header .container");

//opens the menu by clicking the menu icon
menu.addEventListener("click", () => {
  menu.classList.toggle("active");
  nav.classList.toggle("active");
  hc.classList.add("active");
});

//closes the menu by clicking the navigation
nav.addEventListener("click", () => {
  menu.classList.remove("active");
  nav.classList.remove("active");
  hc.classList.remove("active");
});

//closes the navigation by clicking the main body
main.addEventListener("click", () => {
  menu.classList.remove("active");
  nav.classList.remove("active");
  hc.classList.remove("active");
});
const greetings = ["Web Developer", "App Developer", "Coder","Data Analyst"];
let index = 0;

function updateText() {
    document.querySelector(".dynamic-text").textContent = `"${greetings[index]}"`; // Keep quotes
    index = (index + 1) % greetings.length;
}

setInterval(updateText, 2000); // Change every 2 seconds


//alerting user that the function is unavailable
const unavailable = document.querySelector(".notAvailable");

if (unavailable) {
  unavailable.addEventListener("click", (event) => {
    alert("Resume Not Available for Now, Thank You!");
  });
}


