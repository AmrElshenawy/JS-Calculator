const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');

let input;
let data;
let outdisplay = '';
let flag = false;
let operator = '';
let number1 = 0;
let number2 = 0;

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
    data = e;    
    input = e.target.innerHTML;
    displayinput(input);
    });
  });

displayinput = (input) => {
    if(flag === false && data.target.classList[1] === 'center-numbers' && outdisplay.length <= 8){
        outdisplay += input;
        display.textContent = outdisplay;
    }
    else if(data.target.classList[1] === 'operations'){
        flag = true;
        number1 = parseInt(outdisplay);
        outdisplay = '';
        outdisplay = input;
        operator = input;
        display.textContent = outdisplay;
        outdisplay = '';
    }
    else if(flag === true && data.target.classList[1] === 'center-numbers' && outdisplay.length <= 8){
        outdisplay += input;
        display.textContent = outdisplay;
    }
    else if(flag === true && data.target.classList[1] === 'equals'){
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


add = (a, b) => {return a + b;}

subtract = (a, b) => {return (a) - (b);}

multiply = (a, b) => {return a * b;}

divide = (a, b) => {return a / b;}

operate = (operation, a, b) => {
    if(operation === "+")
        add(a, b);
    else if(operation === "-")
        subtract(a, b);
    else if(operation === "*")
        multiply(a, b);
    else if(operation === "/")
        divide(a, b);
}