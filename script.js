"use strict";

// adding the random number which the user needs to guess
let secretNumber = Math.trunc(Math.random() * 30) + 1;

// number of tries remaining counter variable
let score = 10;

let highScore = 0;

const msg = document.querySelector(".message");
const guess = document.querySelector(".guess");

// adding Event Listener when user enters the value to the input box
document.querySelector(".check").addEventListener("click", function () {
  const userGuess = Number(document.querySelector(".guess").value);
  const guess = document.querySelector(".guess");

  // if user clicks on Check button without entering a value and the and condition is for if the user has entered ZERO as the value, so that it does not show no values entered when user enters ZERO has the value.
  if (!userGuess && guess.value === "") {
    msg.textContent = "Oops !!! No value has been entered ";
  } else if (score > 0) {
    // only keep playing until the user has attempts left
    if (userGuess === secretNumber) {
      // when user guess matches the random number
      msg.textContent = "Hurray !!! You win ✅";
      disableUserInput();
      document.body.style.backgroundColor = "#60b347";
      document.querySelector(".number").style.width = "30rem";
      document.querySelector(".number").textContent = secretNumber;
      highScoreSetter();
      document.querySelector("h1").textContent = "You are Awesome !";
      return;
    } else if (userGuess > secretNumber) {
      // when user guess is higher than the random number
      msg.textContent = " Oh No !!! Too High 📈";
    } else if (userGuess < secretNumber) {
      // when the user guess is lower than the random number
      msg.textContent = " Oh No !!! Too Low 📉";
    }
    score--;
    document.querySelector(".score").textContent = score;
    if (score === 0) {
      // when no more attempts are left
      disableUserInput();
      msg.textContent = "Press Again Button to Restart 🔃";
      document.querySelector("h1").textContent = "GAME OVER !";
      document.body.style.backgroundColor = "#FB4141";
      document.querySelector(".number").style.width = "30rem";
      document.querySelector(".number").textContent = secretNumber;
    }
  }
});

// implementating functionality of Again button
document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 30) + 1;
  score = 10;
  document.querySelector(".score").textContent = 10;
  const guess = document.querySelector(".guess");
  const check = document.querySelector(".check");

  guess.removeAttribute("disabled");
  check.removeAttribute("disabled");

  guess.classList.remove("disabled");
  check.classList.remove("disabled");

  document.body.style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";

  msg.textContent = "Start guessing...";

  document.querySelector("h1").textContent = "Guess My Number!";
  document.querySelector(".number").textContent = "?";

  guess.value = "";
});

// disable input field and buttons when the game finishes (either user wins or the number of attempts expires)
function disableUserInput() {
  const check = document.querySelector(".check");

  guess.setAttribute("disabled", "disabled");
  check.setAttribute("disabled", "disabled");
  check.classList.add("disabled");
  guess.classList.add("disabled");
}

// highscore value implementation
function highScoreSetter() {
  if (score > highScore) {
    highScore = score;
    document.querySelector(".highscore").textContent = highScore;
  }
}
