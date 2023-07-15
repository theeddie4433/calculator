const plusButton = document.getElementById('plus');
const minusButton = document.getElementById('minus');
const timesButton = document.getElementById('times');
const divideButton = document.getElementById('divided');
const equalButton = document.getElementById('equal');
const currentOperationDisplay = document.querySelector('.currentOp');
const resultDisplay = document.querySelector('.result');
const clearButton = document.getElementById('clear');
const eraseButton = document.getElementById('delete');
const numberButtons = document.querySelectorAll('[data-number]');
const pointButton = document.getElementById('point');

let firstNumber = '';
let currentOperation = null;
let secondNumber = '';
let shouldResetScreen = false ;

window.addEventListener('keydown', handleKeyboardInput);

function handleKeyboardInput(e){
  if(e.key >= 0 && e.key <= 9) appendNumber(e.key)
  if(e.key === 'Enter') evaluate()
  if(e.key === '.') appendPoint()
  if(e.key === 'Delete') deleteNum()
  if(e.key === 'Escape') clear()
  if(e.key === '/' || e.key === '+' || e.key === '*' || e.key ==='-') setOperation(appendOperand(e.key))
}

numberButtons.forEach((button) => {
  button.addEventListener('click', () => appendNumber(button.textContent))
});

function appendNumber(number) {
    if (currentOperationDisplay.textContent === '0' || shouldResetScreen)
      resetScreen()
    currentOperationDisplay.textContent += number
  }

function appendPoint(){
    if (shouldResetScreen) resetScreen()
    if (currentOperationDisplay.textContent === '') currentOperationDisplay.textContent = '0'
    if (currentOperationDisplay.textContent.includes('.'))return
    currentOperationDisplay.textContent += '.'
  }

function erase(){
   let currentOperationErrased = currentOperationDisplay.textContent;
   currentOperationErrased = currentOperationErrased.slice(0,-1);
   currentOperationDisplay.textContent = currentOperationErrased;
}

function clear(){
  currentOperationDisplay.textContent = '0';
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

function setOperation(operand) {
  if (currentOperation !== null) evaluate()
  firstNumber = currentOperationDisplay.textContent
  currentOperation = operand
  resultDisplay.textContent = `${firstNumber} ${currentOperation}`
  shouldResetScreen = true
  console.log(firstNumber)
  console.log(secondNumber)
  }

function evaluate(){
  if (currentOperation === null || shouldResetScreen) return
  if(firstNumber === 0 && currentOperation === '÷'){
    currentOperationDisplay = 'ERROR' 
    resultDisplay = ''
    return
  }
  secondNumber = currentOperationDisplay.textContent
  currentOperationDisplay.textContent = roundResult(
    operate(currentOperation, firstNumber, secondNumber)
  )
  resultDisplay.textContent = `${firstNumber} ${currentOperation} ${secondNumber} =` 
  shouldResetScreen = true
  currentOperation = null
}

function operate(operand, a, b){
  a = Number(a)
  b = Number(b)
  switch(operand){
    case '+':
      return add(a , b);
    case '-':
      return substract(a , b);
    case '×':
      return multiply(a , b);
    case '÷':
      if (b === 0)return null
      else
      return divide(a , b);

  }
}
function roundResult(number) {
  return Math.round(number * 1000) / 1000
}

pointButton.addEventListener('click', () => appendPoint())
equalButton.addEventListener('click', () => evaluate())
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
    setOperation('×');
  });