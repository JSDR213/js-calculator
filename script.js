//Carolina Molk - Calculator

const buttons = document.querySelectorAll("button")
const display = document.querySelector("#calc-display")
let nums = []
let operator = ""

//function that carries out math operation and returns result
const operation = () => {
    nums = nums.join('').split(" ")
    switch (operator) {
        case "+": return nums[0]+nums[1]
        case "-": return nums[0]-nums[1]
        case "*": return nums[0]*nums[1]
        case "/": return nums[0]/nums[1]
        default: 
            alert("No operator found. Try again.")
    }
}

//adds button to each key, saves and displays data
buttons.forEach((button) => {
    button.addEventListener("click", (Event) => {
        if (button.className == "number-button"){
            nums.push(button.innerText)
            display.innerText = button.innerText
        }
        else if (button.className == "operation-button"){
            operator = (button.innerText)
            nums.push(" ")
            display.innerText = button.innerText
        }
        else if (button.className == "equals-button"){
            display.innerText = operation()
        }
        else if (button.className == "reset-button"){
            location.reload()
        }
    })   
})
n