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
