// CALCULATOR FUNCTIONS //=========================================================
add = (a, b) => {return a + b;}

subtract = (a, b) => {return (a) - (b);}

multiply = (a, b) => {return a * b;}

divide = (a, b) => {
    if(b == 0){
        return "Math Error!"
    }
    else{
        return a / b;
    }
}

operate = (operator, a, b) => {
    switch(operator){
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '×':
            return multiply(a, b);
        case '÷':
            return divide(a, b);
    }
}
//===============================================================================
// DOM //========================================================================
const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');
/* 
let input;

let outdisplay = '';
let number1 = 0;
let number2 = 0; */
let data;
let num1Selected = false;
let num2Selected = false;
let operatorSelected = false;
let solutionFound = false;

let value1 = null, value2 = null, operator = null;



buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
    data = e;    
    input = e.target.innerHTML;
    displayinput(input);
    });
  });

displayinput = (input) => {
    if(num1 === false && data.target.classList[1] === 'center-numbers' && outdisplay.length <= 8){
        outdisplay += input;
        display.textContent = outdisplay;
    }
    if(data.target.classList[1] === 'operations'){
        num1 = true;
        number1 = +outdisplay;
        outdisplay = '';
        outdisplay = input;
        operator = input;
        display.textContent = outdisplay;
        outdisplay = '';
    }
    if(num1 === true && data.target.classList[1] === 'center-numbers' && outdisplay.length <= 8){
        outdisplay += input;
        number2 += +outdisplay;
        display.textContent = outdisplay;
    }
    if(/* flag === true  &&*/ data.target.classList[1] === 'equals'){
        flag = false;
        number2 = parseInt(outdisplay);
        switch(operator){
            case '+':
                display.textContent = add(number1, number2);
                break;
            case '-':
                display.textContent = subtract(number1, number2);
                break;
            case '×':
                display.textContent = multiply(number1, number2);
                break;
            case '÷':
                display.textContent = divide(number1, number2);
                break;
        }
    }   
}


