const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');

let input;
let data;
let outdisplay = '';
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
    if(number2 === 0 && data.target.classList[1] === 'center-numbers' && outdisplay.length <= 10){
        outdisplay += input;
        display.textContent = outdisplay;
    }
    if(data.target.classList[1] === 'operations'){
        number1 = parseInt(outdisplay);
        outdisplay = '';
        outdisplay += input;
        display.textContent = outdisplay;
        outdisplay = '';
    }
    if(number1 !== 0 && data.target.classList[1] === 'center-numbers' && outdisplay.length <= 10 ){
        outdisplay += input;
        display.textContent = outdisplay;
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