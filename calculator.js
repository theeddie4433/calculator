const plusButton = document.getElementById('plus');
const minusButton = document.getElementById('minus');
const timesButton = document.getElementById('times');
const divideButton = document.getElementById('divided');
const currentOperationDisplay = document.querySelector('.currentOp');
const resultDisplay = document.querySelector('.result');
const clearButton = document.getElementById('clear');
const eraseButton = document.getElementById('delete');
const numberButtons = document.querySelectorAll('[data-number]');

let firstNumber = '';
let currentOperation = null;
let secondNumber = '';
let shouldResetScreen = false ;

window.addEventListener('keydown', handleKeyboardInput);

numberButtons.forEach((button) => {
  button.addEventListener('click', () => appendNumber(button.textContent))
});

function appendNumber(number) {
    if (currentOperationDisplay.textContent === '0' || shouldResetScreen)
    resetScreen()
    currentOperationDisplay.textContent += number
  }

function erase(){
   let currentOperationErrased = currentOperationDisplay.textContent;
   currentOperationErrased = currentOperationErrased.slice(0,-1);
   currentOperationDisplay.textContent = currentOperationErrased;
}

function clear(){
  currentOperationDisplay.textContent = '';
  resultDisplay.textContent = '';
  firstNumber = '';
  currentOperation = null;
  secondNumber = '';
  shouldResetScreen = false ;
}

function resetScreen(){
  currentOperationDisplay.textContent = ' '
  shouldResetScreen = false;
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

function setOperation(operand) {
  if (currentOperation !== null){
  evaluate()
  }else{
  firstNumber = currentOperationDisplay.textContent
  currentOperation = operand
  resultDisplay.textContent = `${firstNumber} ${currentOperation}`
  currentOperationDisplay.textContent = ""
  shouldResetScreen = true
  }
}

function evaluate(){
  secondNumber = currentOperationDisplay.textContent
  if(firstNumber === 0 && currentOperation === '÷'){
    currentOperationDisplay = 'ERROR' 
    resultDisplay = ''
  } 
  currentOperationDisplay.textContent = roundResult(
    operate(currentOperation, firstNumber, secondNumber)
  )
  resultDisplay.textContent = `${firstNumber} ${currentOperation} ${secondNumber}`
  resetScreen = true;
}

function operate(operand, a, b){
  a = Number(a)
  b = Number(b)
  switch(operand){
    case '+':
      return add(a,b);
  }
}
function roundResult(number) {
  return Math.round(number * 1000) / 1000
}

clearButton.addEventListener('click', clear);
eraseButton.addEventListener('click', erase);
plusButton.addEventListener('click', function () {
    setOperation('+');
  });
  minusButton.addEventListener('click', function () {
    setOperation('-');
  });
  divideButton.addEventListener('click', function () {
    setOperation('÷');
  });
  timesButton.addEventListener('click', function () {
    setOperation('x');
  });
numberButtons.addEventListener('click', () => appendNumber(numberButtons.textContent));