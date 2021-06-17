class Calculator {
    constructor (currentNumberText,previousNumberText) {
        this.currentNumberText = currentNumberText
        this.previousNumberText = previousNumberText
        this.clear()
    }


clear(){
    this.currentNumber = ''
    this.previousNumber = ''
    this.operator = undefined

}

delete() {
     this.currentNumber = this.currentNumber.toString().slice(0,-1)

}

appendNumber(number) {
    if (number === '.' && this.currentNumber.includes('.')) return
   this.currentNumber = this.currentNumber + number
}

chooseOperator (operator) {
 this.operator = operator
 this.previousNumber = this.currentNumber
 this.currentNumber = ''
}

updateDisplay(){
this.currentNumberText.innerText = this.currentNumber
if (this.operator != null) {
this.previousNumberText.innerText = `${this.previousNumber} ${this.operator}`}
else {
    this.previousNumberText.innerText = ''
}
}


compute() {
  let sum
  let previous = Number(this.previousNumber)
  let current = Number(this.currentNumber)
  if (this.operator === '+') {
    sum = previous + current
  }
  else if (this.operator === '/') {
      sum = previous / current
  }
  else if (this.operator === '-') {
      sum = previous - current
  }
  else if (this.operator ==='*') {
      sum = previous * current
  }
  this.currentNumber = sum
  this.previousNumber = ''
  this.operator = ''
  
}

}




const previousNumberText = document.querySelector('[data-previousNumber]')
const currentNumberText = document.querySelector('[data-currentNumber]')
const numberButtons = document.querySelectorAll('[data-number]')
const operatorChoice = document.querySelectorAll('[data-operator]')
const equals = document.querySelector('[data-equals]')
const allClear = document.querySelector('[data-allClear]')
const del = document.querySelector('[data-delete]')

const calculator = new Calculator (previousNumberText,currentNumberText)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

operatorChoice.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperator(button.innerText)
        calculator.updateDisplay()
    })
})

allClear.addEventListener('click', () =>{
    calculator.clear()
    calculator.updateDisplay()
})


del.addEventListener('click', ()=> {
    calculator.delete()
    calculator.updateDisplay()
})

equals.addEventListener('click', () =>{
    calculator.compute()
    calculator.updateDisplay()
})