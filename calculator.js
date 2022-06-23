let chooseOperator = prompt('Choose the operation you want to perform * / + - %');

let firstNumber = prompt('Enter first figure');
let secondNumber = prompt('Enter second figure... ' + firstNumber + ' ' + chooseOperator);

let multiply = firstNumber * secondNumber;
let divide = firstNumber / secondNumber;
let addition = (Number (firstNumber)) + (Number (secondNumber));
let subtraction = firstNumber - secondNumber;


if (chooseOperator === '*'){
    alert('Your answer is ' + firstNumber +  ' * ' + secondNumber + ' = ' + multiply);
}else if (chooseOperator === '/'){
    alert('Your answer is ' + firstNumber +  ' / ' + secondNumber + ' = ' + divide);
}else if (chooseOperator === '+'){
    alert('Your answer is ' + firstNumber +  ' + ' + secondNumber + ' = ' + addition);
}else if (chooseOperator === '-'){
    alert('Your answer is ' + firstNumber +  ' - ' + secondNumber + ' = ' + subtraction);
}else {
    alert('The operator you chose is not a valid operator.');
}
