const plusButton = document.getElementById('plus');
const minusButton = document.getElementById('minus');
const timesButton = document.getElementById('times');
const divideButton = document.getElementById('divided');
const currentOperation = document.querySelector('.currentOp');
const result = document.querySelector('.result');
const clear = document.getElementById('clear');
const erase = document.getElementById('delete');
const numberButtons = document.querySelectorAll('[data-number]');

let firstNumber = '';
let operand = null;
let secondNumber = '';
let resetScreen = false ;

window.addEventListener('keydown', handleKeyboardInput);




numberButtons.forEach((button) =>
  button.addEventListener('click', () => appendNumber(button.textContent))
);

function appendNumber(number) {
    if (operand === null) {
      firstNumber += number;
      currentOperation.textContent = `${firstNumber}`;
    } else {
      secondNumber += number;
      currentOperation.textContent = `${firstNumber} ${operand} ${secondNumber}`;
    }
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

  appendOperand(operand){

  }

  setOperation(operand){

    if (operand == "+") 
  }

clear.addEventListener('click', handleClearClick);
erase.addEventListener('click', handleDeleteClick);
plus.addEventListener('click', () => setOperation(plus.textContent));
minus.addEventListener('click', () => setOperation(minus.textContent));
divide.addEventListener('click', () => setOperation(divide.textContent));
times.addEventListener('click', () => setOperation(times.textContent));