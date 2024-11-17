// script.js
let currentInput = "";

function appendToDisplay(value) {
  currentInput += value;
  document.getElementById('display').value = currentInput;
}

function clearDisplay() {
  currentInput = "";
  document.getElementById('display').value = "";
}

function backspace() {
  currentInput = currentInput.slice(0, -1);
  document.getElementById('display').value = currentInput;
}

function calculateResult() {
  try {
    currentInput = eval(currentInput.replace('√', 'Math.sqrt')).toString();
    document.getElementById('display').value = currentInput;
  } catch (error) {
    document.getElementById('display').value = "Error";
    currentInput = "";
  }
}

function calculateSquareRoot() {
  try {
    let result = Math.sqrt(parseFloat(currentInput));
    if (isNaN(result)) throw new Error("Invalid Input");
    currentInput = result.toString();
    document.getElementById('display').value = currentInput;
  } catch {
    document.getElementById('display').value = "Error";
    currentInput = "";
  }
}

