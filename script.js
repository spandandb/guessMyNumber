"use strict";

// adding the random number which the user needs to guess
const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector(".number").textContent = secretNumber;

// number of tries remaining counter variable
let score = 10;

let highScore = 0;

// adding Event Listener when user enters the value to the input box
document.querySelector(".check").addEventListener("click", function () {
  const userGuess = Number(document.querySelector(".guess").value);
  const msg = document.querySelector(".message");
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
      highScoreSetter();
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
      disableUserInput();
      msg.textContent = "Press Again Button to Restart 🔃";
    }
  }
});

// disable input field and buttons when the game finishes (either user wins or the number of attempts expires)
function disableUserInput() {
  const guess = document.querySelector(".guess");
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
