let rate;
let your_rate = document.getElementById("myrate");
let button = document.getElementById("button");
let rating_container = document.querySelector(".rating_container");
let response_container = document.querySelector(".response_container");
let circles = document.querySelectorAll(".value");

const rating = (value) => {
  rate = value;
  if (rate) {
    button.addEventListener("click", () => {
      rating_container.style.display = "none";
      response_container.style.display = "block";

      your_rate.innerText = `You selected ${rate} out of 5`;
    });
  }
};
