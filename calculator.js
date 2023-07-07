/*
const plus = document.getElementById('.plus');
const minus = document.getElementById('.minus');
const times = document.getElementById('.times');
const divide = document.getElementById('.divided');
*/
const currentOperation = document.querySelector('.currentOp')
const result = document.querySelector('.result')
const clear = document.getElementById('.clear');
const delete = document.getElementById('.delete');
const numberButtons = document.querySelectorAll('[data-number]');

let firstNumber = ''
let operand = ''
let secondNumber = ''

window.addEventListener('keydown', handleKeyboardInput);

clear.addEventListener('click', handleClearClick);
delete.addEventListener('click', handleDeleteClick);


numberButtons.forEach((button) =>
  button.addEventListener('click', () => appendNumber(button.textContent))
);


appendNumber(number){
    if (firstNumber === '') {

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

  setOperation(operand){

  }