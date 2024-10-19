//your JS code here. If required.
// script.js

document.addEventListener('DOMContentLoaded', function() {
  const num1 = document.getElementById('num1');
  const num2 = document.getElementById('num2');
  const operator = document.getElementById('operator');
  const resultContainer = document.getElementById('result');
  const calculateButton = document.getElementById('calculate');
  const changeTextButton = document.getElementById('change_text');
  const textDivs = document.querySelectorAll('.division');

  // Calculation function
  calculateButton.addEventListener('click', function() {
    const value1 = parseFloat(num1.value);
    const value2 = parseFloat(num2.value);
    const selectedOperator = operator.value;
    let result = 0;

    // Perform the selected operation
    switch (selectedOperator) {
      case '+':
        result = value1 + value2;
        break;
      case '-':
        result = value1 - value2;
        break;
      case '*':
        result = value1 * value2;
        break;
      case '/':
        result = value2 !== 0 ? value1 / value2 : 'Error (division by 0)';
        break;
      default:
        result = 'Invalid operation';
    }

    // Display the result
    resultContainer.textContent = result;
  });

  // Change text function
  changeTextButton.addEventListener('click', function() {
    const newText = ["Bye", "Good Bye", "To", "Your", "Class"];

    textDivs.forEach((div, index) => {
      div.textContent = newText[index];
    });
  });
});

