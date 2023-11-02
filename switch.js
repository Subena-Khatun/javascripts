// Simple Calculator
// prompt() --> keyboard value

/*
1. operator lagbe: +, / - * %
2. calculation er jonno 2 ta input value lagbe jeta k bola jay operhand lage
3. calculation er jonno result ta show koranur jonno akta varaible lagbe jetay value ta bosabo
4. now apply suru korbo switch case diye

conditon kaj korbe ai jaygay operator er upor
mane operaton + hole + er calculation hobe ai type

1. +
2. -
3. *
4. /
5. %
6. invalid operator
*/

var operator = prompt('Enater operators: +, /,-.*,%');
var number1 = prompt('Enater number 1: ');
var number2 = prompt('Enter number 2: ');
var result;
switch(operator){
    case '+':
        result = number1 + number2
        console.log(`${number1} + ${number2} = ${result}`)
        break
    case '-':
        result = number1 - number2
        console.log(`${number1} - ${number2} = ${result}`)
        break
    case '*':
        result = number1 * number2
        console.log(`${number1} * ${number2} = ${result}`)
        break
    case '/':
        result = number1 / number2
        console.log(`${number1} / ${number2} = ${result}`)
        break
    case '%':
        result = number1 % number2
        console.log(`${number1} % ${number2} = ${result}`)
        break
    default:
        console.log('Invalid operator');
        break
}
