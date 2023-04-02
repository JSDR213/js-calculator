const wholeCalcDiv = document.querySelector("#frame")
const calcDisplay = document.querySelector("#calc-display")

let calculation = []
let joinNumberPresses


//I was really excited about eval because it was so much simpler than what I was trying originally but I've since read that there are security issues.

function getCalc(event) {
  const value = (event.target.id)
  if (value === `reset`) {
    calculation = []
    calcDisplay.textContent = ``
  } else if (value === "=") {
    calcDisplay.textContent = eval(joinNumberPresses)
  } else {
    calculation.push(value)
    joinNumberPresses = calculation.join(``)
    calcDisplay.textContent = joinNumberPresses

}}

wholeCalcDiv.addEventListener(`click`, getCalc)