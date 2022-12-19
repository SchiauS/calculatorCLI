const calculator = {
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
};

function inputDigit(digit) {
  const { displayValue, waitingForSecondOperand } = calculator;

  if (waitingForSecondOperand === true) {
    calculator.displayValue = digit;
    calculator.waitingForSecondOperand = false;
  } else {
    calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
  }
}

function inputDecimal(dot) {
// If the `displayValue` does not contain a decimal point
    if (!calculator.displayValue.includes(dot)) {
        // Append the decimal point
        calculator.displayValue += dot;
    }
}


function resetCalculator() {
calculator.displayValue = '0';
calculator.firstOperand = null;
calculator.waitingForSecondOperand = false;
calculator.operator = null;
}

function updateDisplay() {
const display = document.querySelector('.calculator-screen');
display.value = calculator.displayValue;
}
updateDisplay();

function getData(ajaxurl, values) { 
    return $.ajax({
                url: ajaxurl,
                type: 'POST',
                data: values,
                dataType:'json',
    });
};

async function performCalculation(calculator){
    try {
        const res = await getData('/calculate', calculator)
        return res;
    } catch(err) {
        console.log(err);
    }
}

function handleOperator(nextOperator) {
    const { firstOperand, displayValue, operator } = calculator
    const inputValue = parseFloat(displayValue);
  
    if ((operator && calculator.waitingForSecondOperand) && operator != 'sqrt')  {
      calculator.operator = nextOperator;
      return;
    }
  
    if (firstOperand == null) {
      calculator.firstOperand = inputValue;
    } else if (operator) {
      const currentValue = firstOperand || 0;
      const result = performCalculation(calculator);
      result.then((res) => { 
            calculator.displayValue = String(res);
            calculator.firstOperand = res;
            const display = document.querySelector('.calculator-screen');
            display.value = calculator.displayValue;
      });
    }
    calculator.waitingForSecondOperand = true;
    calculator.operator = nextOperator;
}

const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
    const { target } = event;
    if (!target.matches('button')) {
        return;
    }

    if (target.classList.contains('operator')) {
        handleOperator(target.value);
        return;
    }
    if (target.classList.contains('all-clear')) {
        resetCalculator();
        updateDisplay();
    return;
    }

    inputDigit(target.value);
    updateDisplay();
});