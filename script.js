let display = document.getElementById('display');
let calculation = '';

function show(value) {
  calculation += value;
  display.value = calculation;
}

function clearDisplay() {
  calculation = '';
  display.value = ' ';
}

function calculate() {
  let result = eval(calculation);
  display.value = result;
  calculation = result.toString();
}

