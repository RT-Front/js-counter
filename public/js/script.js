// Global variables
let counterResult = document.getElementById("counter");
let buttons = document.querySelectorAll(".btn");

let index = 0;

function checkClickedButton(key) {
  if (key == 0) {
    ++index;
    counterResult.innerText = "Counter: " + index;
  } else if (key == 1) {
    --index;
    counterResult.innerText = "Counter: " + index;
  }
}

function eachButton() {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
      let key = buttons[i].dataset.key; // "0" | "1"

      checkClickedButton(key);
    });
  }
}

eachButton();
