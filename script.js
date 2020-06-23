const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');

// buttons.addEventListener('click', displayinput());

buttons.forEach((button) => {

    // and for each one we add a 'click' listener
    button.addEventListener('click', (e) => {
      displayinput();
    });
  });

displayinput = () => {
    const paragraph = document.createElement('p');
    paragraph.textContent = '123456';
    display.appendChild(paragraph);
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