let randomNumber1 = Math.trunc(Math.random() * 5) + 1;
let randomNumber2 = Math.trunc(Math.random() * 5) + 1;
const result = document.querySelector("h1");

function displayResult() {
  document
    .querySelector(".img1")
    .setAttribute("src", `images/dice${randomNumber1}.png`);
  document
    .querySelector(".img2")
    .setAttribute("src", `images/dice${randomNumber2}.png`);

  if (randomNumber1 === randomNumber2) {
    result.textContent = "Draw";
  } else {
    result.textContent = `${
      randomNumber1 > randomNumber2 ? "Player 1 Wins" : "Player 2 Wins"
    }`;
  }
}

setInterval(function () {
  displayResult();
}, 1000);
