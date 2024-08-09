let rate
let your_rate = document.getElementById("myrate")
let button = document.getElementById("button")
let rating_container = document.querySelector(".rating_container")
let response_container = document.querySelector(".response_container")
let circles = document.querySelectorAll(".value")

/* add background color to clicked circle, and remove bg color on 
all other circles queried in list "Circles" */
for (let i = 0; i < circles.length; i++) {
  const circle = circles[i]
  circle.addEventListener("click", () => {
    circle.classList.add("active_value")
    your_rate.innerText = `You selected ${circle.innerText} out of 5`
    let j = i + 1
    if (j === 5) j = j % circles.length
    while (j != i) {
      circles[j].classList.remove("active_value")
      j += 1
      j = j % circles.length
    }
  })
}

button.addEventListener("click", () => {
  rating_container.style.display = "none"
  response_container.style.display = "block"
})
