let count = 0;


// Select HTML elements

const countDisplay = document.getElementById("count");

const incrementButton =
  document.getElementById("increment");

const decrementButton =
  document.getElementById("decrement");

const resetButton =
  document.getElementById("reset");


// Update the number displayed on the page

function updateDisplay() {
  countDisplay.textContent = count;
}


// Increment

incrementButton.addEventListener("click", function () {

  count++;

  updateDisplay();

});


// Decrement

decrementButton.addEventListener("click", function () {

  if (count > 0) {
    count--;
  }

  updateDisplay();

});


// Reset

resetButton.addEventListener("click", function () {

  count = 0;

  updateDisplay();

});