const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');

let input = 0;
// buttons.addEventListener('click', displayinput());

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
    input = e.target.innerHTML;
    displayinput(input);
    });
  });

displayinput = (input) => {
    display.textContent = input;
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