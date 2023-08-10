document.addEventListener("DOMContentLoaded", function() {
    const display = document.getElementById("display");
    let currentValue = "0";
    let operator = "";
    let result = 0;
  
    function updateDisplay() {
      display.textContent = currentValue;
    }
  
    function calculate() {
      const num1 = parseFloat(result);
      const num2 = parseFloat(currentValue);
  
      switch (operator) {
        case "+":
          result = num1 + num2;
          break;
        case "-":
          result = num1 - num2;
          break;
        case "*":
          result = num1 * num2;
          break;
        case "/":
          result = num1 / num2;
          break;
        default:
          break;
      }
  
      currentValue = result.toString();
      operator = "";
      updateDisplay();
    }
  
    function handleButtonClick(event) {
      const value = event.target.textContent;
  
      if (!isNaN(value) || value === ".") {
        if (currentValue === "0" && value !== ".") {
          currentValue = value;
        } else {
          currentValue += value;
        }
      } else if (value === "C") {
        currentValue = "0";
        operator = "";
        result = 0;
      } else if (value === "=") {
        if (operator) {
          calculate();
        }
      } else {
        operator = value;
        result = currentValue;
        currentValue = "0";
      }
  
      updateDisplay();
    }
  
    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
      button.addEventListener("click", handleButtonClick);
    });
  });
  
