const plusButton = document.getElementById('plus');
const minusButton = document.getElementById('minus');
const timesButton = document.getElementById('times');
const divideButton = document.getElementById('divided');
const currentOperation = document.querySelector('.currentOp');
const result = document.querySelector('.result');
const clear = document.getElementById('clear');
const eraseButton = document.getElementById('delete');
const numberButtons = document.querySelectorAll('[data-number]');

let firstNumber = '';
let currentOperand = null;
let secondNumber = '';
let shouldResetScreen = false ;

window.addEventListener('keydown', handleKeyboardInput);

numberButtons.forEach((button) => {
  button.addEventListener('click', () => appendNumber(button.textContent))
});

function appendNumber(number) {
    if (currentOperation.textContent === '0' || shouldResetScreen)
    resetScreen()
    currentOperation.textContent += number
  }

function erase(){
   let currentOperationErrased = currentOperation.textContent;
   currentOperationErrased = currentOperationErrased.slice(0,-1);
   currentOperation.textContent = currentOperationErrased;
}

function resetScreen(){
    currentOperation.textContent = ' '
  }

function add(a, b) {
    return a + b
}
  
function substract(a, b) {
    return a - b
}
  
function multiply(a, b) {
    return a * b
}
  
function divide(a, b) {
    if (a === 0) return "error"
    return a / b
}

  function handleKeyboardInput(e){
    if(e.key >= 0 && e.key <= 9) appendNumber(e.key)
    if(e.key === 'return') evaluate()
    if(e.key === '.') appendPoint()
    if(e.key === 'Backspace') deleteNum()
    if(e.key === 'escape') clear()
    if(e.key === '/' || e.key === '+' || e.key === '*' || e.key ==='-') setOperation(appendOperand(e.key))
  }

  /*appendOperand(operand){
    
  }*/

  function setOperation(operand) {
    switch (operand) {
        case 'x':
            multiply(firstNumber, secondNumber);
            break;
        case '+':
            add(firstNumber, secondNumber);
            break;
        case '-':
            substract(firstNumber,secondNumber);
            break;
        case '/':
            divide(firstNumber, secondNumber);
            break;
      // Add more cases for other operations if needed
      default:
        // Handle unrecognized operand
        break;
    }
  }

clear.addEventListener('click', resetScreen);
eraseButton.addEventListener('click', erase);
plusButton.addEventListener('click', function () {
    setOperation('+');
  });
  minusButton.addEventListener('click', function () {
    setOperation('-');
  });
  divideButton.addEventListener('click', function () {
    setOperation('/');
  });
  timesButton.addEventListener('click', function () {
    setOperation('x');
  });
numberButtons.addEventListener('click', () => appendNumber(numberButtons.textContent));