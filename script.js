// CALCULATOR FUNCTIONS //=========================================================
add = (a, b) => {return a + b;}
subtract = (a, b) => {return (a) - (b);}
multiply = (a, b) => {return a * b;}
divide = (a, b) => {
    if(isFinite(a / b)){
        return a / b;
    }
    return "Math Error!"
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
const displayNum1 = document.querySelector('#displayNum1');
const displayNum2 = document.querySelector('#displayNum2');
const displayOperator = document.querySelector('#displayOperator');
const buttons = document.querySelectorAll('button');

let data,
    input,
    htmlSource,
    num1Selected = false, 
    num2Selected = false,
    operatorSelected = false,
    solutionFound = false,
    value1 = null, 
    value2 = null, 
    operator = null;

document.addEventListener('keydown', (e) => {
    if(e.keyCode === 13){
        event.preventDefault();
    }
    const key = document.querySelector(`button[data-key="${e.keyCode}"]`);
    if(key != null) key.click();
});

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
    data = e;   
    input = e.target.innerHTML;
    htmlSource = e.target.classList[1];
    switch(htmlSource){
        case 'center-numbers':
            addValue(input);
            break;
        case 'operations':
            selectOperator(input);
            break;
    }
    switch(input){
        case 'C':
            clear();
            break;
        case '±':
            invert();
            break;
        case '=':
            findSolution();
            break;
        case '.':
            addPeriod();
            break;
        case '%':
            percentage();
            break;
        case '⌫':
            dlt();
            break;
    }
    });
});

addValue = (input) => {
    if(solutionFound == true) clear();
    if(!num1Selected){
        num1Selected = true;
        value1 = input;
    } 
    else if(num1Selected && !operatorSelected){
        if(value1 === 0 && !value1.includes('.')){
            value1 = input;
        } 
        else if(value1.length < 9){
            value1 += input;
        }
    }
    else if(num1Selected && operatorSelected){
        if(!num2Selected){
            num2Selected = true;
            value2 = input;
        }
        else if(num2Selected){
            if(value2 === 0 && !value2.includes('.')){
                value2 = input;
            }
            else if(value2.length < 9){
                value2 += input;
            }
        }
    }
    displayNum1.textContent = value1;
    displayNum2.textContent = value2;
}
selectOperator = (input) => {
    if(!num1Selected) return;
    if(num1Selected && !num2Selected){
        operator = input;
        displayOperator.textContent = input;
        operatorSelected = true;
    }
    else if(num1Selected && num2Selected && !solutionFound){
        findSolution();
        operator = input;
        displayOperator.textContent = input;
        operatorSelected = true;
        num2Selected = false;
        value2 = null;
        solutionFound = false;
    }
    else if(num1Selected && num2Selected && solutionFound){
        operator = input;
        displayOperator.textContent = input;
        operatorSelected = true;
        num2Selected = false;
        value2 = null;
        solutionFound = false;
    }
}
findSolution = () => {
    if(num1Selected && operatorSelected && num2Selected){
        value1 = +value1;
        value2 = +value2;
        
        let solution = operate(operator, value1, value2);
        if(solution == "Math Error!"){
            clear();
            displayNum1.textContent = "Math Error!";
        }
        else{
            value1 = String(solution);
            displayNum1.textContent = value1;
            displayNum2.textContent = "";
            displayOperator.textContent = "";
            solutionFound = true;
        }
    }
}
invert = () => {
    if(solutionFound){
        value1 *= -1;
        displayNum1.textContent = value1;
        solutionFound = false;
        value2 = null;
        operatorSelected = false;
        num2Selected = false;
        value1 = String(value1);
    }
    else if(num2Selected){
        value2 *= -1;
        displayNum2.textContent = value2;
        value2 = String(value2);
    }
    else if(num1Selected && !operatorSelected){
        value1 *= -1;
        displayNum1.textContent = value1;
        value1 = String(value1);
    }
}
percentage = () => {
    if(solutionFound){
        value1 /= 100;
        displayNum1.textContent = +value1.toFixed(3);
        value1 = String(value1);
        solutionFound = false;
        value2 = null;
        operatorSelected = false;
        num2Selected = false;
    }
    else if(num2Selected){
        value2 /= 100;
        displayNum2.textContent = +value2.toFixed(3);
        value2 = String(value2);
    }
    else if(num1Selected && !operatorSelected){
        value1 /= 100;
        displayNum1.textContent = +value1.toFixed(3);
        value1 = String(value1);
    }
}
addPeriod = () => {
    if(solutionFound == true) clear();
    if(!num1Selected){
        num1Selected = true;
        value1 = "0.";
    }
    else if(num1Selected && !operatorSelected){
        if(value1.length < 9 && !value1.includes('.')){
            value1 += ".";
        }
    }
    else if(num1Selected && operatorSelected){
        if(!num1Selected){
            num2Selected = true;
            value2 = "0.";
        }
        else if(num2Selected){
            if(value2.length < 9 && !value2.includes('.')){
                value2 += '.';
            }
        }
    }
    displayNum1.textContent = value1;
    displayNum2.textContent = value2;
}
dlt = () => {
    if(solutionFound == true) clear();
    if(num1Selected && !operatorSelected){
        value1 = Math.floor(value1 / 10);
        displayNum1.textContent = value1;
        value1 = String(value1);
    }
    else if(num2Selected){
        value2 = Math.floor(value1 / 10);
        displayNum2.textContent = value2;
        value2 = String(value2);
    }
}
clear = () => {
    num1Selected = false;
    num2Selected = false;
    operatorSelected = false;
    solutionFound = false;
    value1 = null;
    value2 = null;
    operator = null;
    displayNum1.textContent = "";
    displayOperator.textContent = "";
    displayNum2.textContent = "";
}