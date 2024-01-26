const leftInput = document.querySelector(".lefthand-side")
const rightInput = document.querySelector(".righthand-side")
const addition = document.querySelector(".addition")
const subtraction = document.querySelector(".subtraction")
const division = document.querySelector(".division")
const multiplication = document.querySelector(".multiplication")
const result = document.querySelector(".result")
const alert = document.querySelector(".input-alert")
leftInput.addEventListener("input", validateInput)
rightInput.addEventListener("input", validateInput)
addition.addEventListener("click", evaluateUserInput)
subtraction.addEventListener("click", evaluateUserInput)
division.addEventListener("click", evaluateUserInput)
multiplication.addEventListener("click", evaluateUserInput)

function validateInput(e) {
    if(isNaN(leftInput.value) || isNaN(rightInput.value)){
        result.innerText = 'Please enter two valid numbers'
        alert.classList.toggle('error')
    }
    if(rightInput.value === 0) {
        result.innerText = 'You can not divide by zero bro'
        alert.classList.toggle('error')
    }
    alert.classList.toggle('error')
}

function evaluateUserInput(e) {
    let calcResult;
    const lhs = parseFloat(leftInput.value)
    const rhs = parseFloat(rightInput.value)
    let operation = e.target
    switch(operation) {
        case addition: {
            calcResult= lhs + rhs
            break
        }
        case subtraction: {
            calcResult = lhs - rhs; 
            break;
        }
        case division: {
            if(rhs === 0) {
                const divisionError = "You can't divide by zero bro"
                alert.classList.toggle('error')
                alert.innerText = divisionError
                break;
            }
            calcResult = lhs / rhs
            break
        }
        case multiplication: {
            calcResult = lhs * rhs
            break
        }
        default: 
            break; 
    }
    result.innerText = `${calcResult}`
    
}