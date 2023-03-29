//whiteboarding
//writing out the steps of what you want to accomplish
// setting up an order and plan of attack
// not writing code! just writing in plain English

// use numbers and perform math operations
// user input, operators, results

// psuedocoding
// addEventListener for all buttons
// attach # values to numbers
// and operators to + - * /
// input operations and numbers - the state of the calculator

// rubber ducking
// vocalize your plans and your problems/bugs

// Think about how you are going to store the state of the calculator. What kind of information do you need to track?
// When the user clicks a button, how are you going to get which number or operation they clicked? When they click a certain button, what code are you going to have to run?
// Try not to use a separate event handler for each button. With $(event.currentTarget) you could use just one event handler for the numbers by grabbing the text from the clicked element.

//VARIABLES
let numbers = document.querySelectorAll('.number-button')
let operation = document.querySelectorAll('.operation-button')
let equal = document.querySelector('.equals-button')
let reset = document.querySelector('.reset-button')
console.log(reset)
let calcDisplay = document.getElementById('calc-display')
let memory = 0
let currentOperation = ''

//Number Buttons
numbers.forEach((numberButton) => {
  numberButton.addEventListener('click', function (event) {
    const currentContent = calcDisplay.textContent
    calcDisplay.innerText = currentContent + event.target.textContent
    console.log(event.target.textContent)
  })
})

//Operation Switch Statements
equal.addEventListener('click', function (event) {
  let currentOperator = event.target.textContent
  let total = 0
  switch (currentOperation) {
    case '/':
      total = division(memory, parseInt(calcDisplay.textContent))
      break
    case '*':
      total = multiplication(memory, parseInt(calcDisplay.textContent))
      //   console.log(calcDisplay.textContent, 'multiplication')
      break
    case '-':
      total = subtraction(memory, parseInt(calcDisplay.textContent))
      //   console.log(calcDisplay.textContent, 'subtraction')
      break
    case '+':
      total = addition(memory, parseInt(calcDisplay.textContent))
      break
  }
  calcDisplay.innerText = total
})

//Operator Buttons
operation.forEach((operatorButton) => {
  operatorButton.addEventListener('click', function (event) {
    let currentOperator = event.target.textContent
    if (currentOperator === '=') {
    } else {
      currentOperation = currentOperator
      memory = parseInt(calcDisplay.textContent)
      calcDisplay.innerText = ''
    }
    console.log(event.target.textContent)
  })
})

//Arithmetic Equations
function division(operandOne, operandTwo) {
  return operandOne / operandTwo
}

function multiplication(operandOne, operandTwo) {
  return operandOne * operandTwo
}

function subtraction(operandOne, operandTwo) {
  return operandOne - operandTwo
}

function addition(operandOne, operandTwo) {
  return operandOne + operandTwo
}

//Reset Button
reset.addEventListener('click', function (event) {
  calcDisplay.innerText = ''
})
