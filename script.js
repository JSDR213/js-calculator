//whiteboarding
    //writing out the steps of what you want to acomplish
    //setting up an order and plan of attack
    //not writing code, just writting in plain english

    //use numbers and perform math operations
    //user input, operators, results
/*
listen for the click of a button;
if the button clicked is a number and if the length of the display string is < 6
add value of the clicked button;
if the button clicked is a number and the length of the display string is >= 6
do nothing;
if display string does not equal nothing
and the class of the clicked button is operation-button
then assign the id of the clicked operator to a variable called clickedOperator
if clicked button id is = 
do nothing
if clicked button id is reset then clear display content 
then listen for more clicks

*/
//pseudocoding 
    // attach number values to numbers
    // add operators to + - * /
    // attach string value to .
    // add event listeners for all buttons
    // display and store input if number 
    // store input if operator follows a number input
    // display number input if follows operator 
    // do math on click of = 
    // display math result
    // clear storage and display 0


//rubber ducking
    // vocalizing problems and bugs to help catch errors
    

//    const oneButton = document.getElementById('1')
//     oneButton.addEventListener('click',console.log('Clicked one'))

const resetButton = document.querySelector('.reset-button');
const displayWindow = document.getElementById('calc-display');    
const numberButton = document.querySelectorAll('.number-button');
const operationButton = document.querySelectorAll('.operation-button');
const equalsButton = document.getElementById('=');
let firstInput;
let memory;
// console.log(operationButton)

const refreshPage = () => { location.reload()};
resetButton.addEventListener('click', refreshPage);

let firstInputClicks = (event) => {
    let targetId = event.target.id;
    let targetClass = event.target.className;
    
    if (displayWindow.innerHTML === '' && targetId === '0' || displayWindow.innerHTML.includes('.') && targetId === '.' || displayWindow.innerHTML === '' && targetClass === 'operation-button' || displayWindow.innerHTML === '' && targetClass === 'equals-button' || displayWindow.innerHTML === '.' && targetClass === 'operation-button' || displayWindow.innerHTML === '.' && targetClass === 'equals-button'){
        alert('Invalid entry')
    }
    else if(targetClass === 'number-button' && displayWindow.innerHTML === ''){
        displayWindow.innerHTML += targetId
    }
    else if(targetClass === 'number-button' && displayWindow.innerHTML.length < 9 ){
        displayWindow.innerHTML += targetId
    }   
    else if (displayWindow.innerHTML !== '' && targetClass === 'operation-button'){
        firstInput = displayWindow.innerHTML;
        memory = firstInput + targetId;
        displayWindow.innerHTML = '';
        console.log(memory);
        document.body.removeEventListener('click', firstInputClicks);
        document.body.addEventListener('click', nextInputClicks);
    }
}

document.body.addEventListener('click', firstInputClicks);
// let memory;

let nextInputClicks = (event) => {
    let targetId = event.target.id;
    let targetClass = event.target.className;
    if (targetClass === 'operation-button' && memory.includes('+') || targetClass === 'operation-button' && memory.includes('-') || targetClass === 'operation-button' && memory.includes('*') || targetClass === 'operation-button' && memory.includes('/') || displayWindow.innerHTML.includes('.') && targetId === '.'){
        alert('Nope')
    }
    else if (displayWindow.innerHTML.length < 9 && targetClass === 'number-button' && memory.includes('+') || memory.includes('-') || memory.includes('*') || memory.includes('/')){
        displayWindow.innerHTML += targetId;
        memory += targetId;
        console.log(memory);
        equalsButton.addEventListener('click', evaluate)
    }
}
let evaluate = () => {
    document.body.removeEventListener('click', nextInputClicks);
    // if (firstInput.length > 5){
    // displayWindow.innerHTML = eval(memory).toFixed(2)}
    // else (displayWindow.innerHTML = eval(memory).toFixed(5))
    displayWindow.innerHTML = Math.round((eval(memory) + Number.EPSILON) * 1000) / 1000
}

// else if(firstInput.includes('+'||'-'||'/'||'*') && targetClass === 'operation-button'){
//     alert('Invalid entry')
// }
// && targetClass !== 'operation-button' && targetClass !== 'equals-button'
// console.log(displayWindow.innerHTML.includes('.'))
// console.log(clickedAButton);

// typeof parseInt(targetId) === 'number' &&

// // console.log(numberButton)
// let buttonValue = parseInt(numberButton.id)
// // console.log(buttonValue)
// const oneButton = document.getElementById('1');
// let oneButtonValue = parseInt(oneButton.id);

// oneButton.addEventListener('click', ()=>{
//     if (typeof oneButtonValue === 'number'){
//     displayWindow.innerHTML += oneButtonValue}  
// });








    // const numberButtons = document.querySelectorAll('.number-button')
    // const operationButtons = document.querySelectorAll('.operation-button')

    // let anyButton = document.querySelectorAll([type='button'])
    
    // anyButton.forEach((item)=>{item.addEventListener('click',getValue)})

    // function getValue (){
    //     item.id 
    // }

    // console.log(anyButton)
    // anyButton.addEventListener('click', console.log('clicked a button'))
    

    // console.log(numberButtons)


    // let numberValue = numberButton.innerText;
    // console.log(numberValue)
    // document.addEventListener('click', function (){

    // })

    // console.log(numberValue)
// let buttonArray = document.getElementsByClassName('number-button');
// document.addEventListener('click', function (){
// for(i = 0; i < buttonArray.length; i++ ){
//     let buttonValue = buttonArray[i].id;
//     console.log(buttonValue)
//     // document.getElementById('calc-display').innerText = buttonValue
//     }
// });
// console.log(buttonValue)