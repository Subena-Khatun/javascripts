// && , || ---> work minimu 2 conditions
/*
any one false means false otherwise true
1. true && true = true
2. true && false = false
3.false && false = false
4. false && true = false

||
anyone true means true otherwise false
1. true || true = true
2. true || false = true
3. false || true = ture
4. false || false = false

*/

//  take  2 or 3 number and check which one greater than 
var a = 10
var b = 20
var c = 30
if(a>b && b>c){
    console.log(`${a} is grater than ${b}. ${b} is greater than ${c}`)
}
else if(a >= b && a >= c){
    console.log(`${a} is greater than b and c`)
}
else if(b >= c && b >= c){
    console.log(`${b} is greater than c`)
}
else if( a <= b || a >= c){
    console.log(`Print just value of ${a}`)
}
else{
    console.log('check agian and also give some more condition for better result or output')
}

// Find the largest of three number or smallest number

var a = 10
var b = 20
var c = 5

if(a>b && a>c){
    console.log(`a = ${a} is the largest number`)
}
else if( b > a  && b >c){
    console.log(`b = ${b} is the largest number`)
}
else if(c > a && c>b){
    console.log(`c = ${c} is the largest number`)
}
else{
    console.log('try again')
}

// Check if a triangle is equilateral, scalene, or isosceles
var side1 = 20
var side2 = 5
var side3 = 15

if((side1==side2) && (side2==side3)){
    console.log("Triangle are Equilateral.")
}
else if((side1 == side2) && (side2 != side3)){
    console.log("Triangle are Isoscale.")
}
else{
    console.log('Triangle are Scalene')
}

/*
Find the grade for input marks
Function `findGrade()` to find the grade of the student based on the input marks.

Print “S grade” if marks is between 90 and 100.
Print “A grade” if marks is between 80 and 90.
Print “B grade” if marks is between 70 and 80.
Print “C grade” if marks is between 60 and 70.
Print “D grade” if marks is between 50 and 60.
Print “E grade” if marks is between 40 and 50.
Print “Student has failed” if marks is between 0 and 40.
Else print “Invalid marks”.
*/
function findGrade(number){
    if(number >= 90 && number <= 100){
        console.log('S grade')
    }
    else if( number >= 80 || number <= 90 ){
        console.log('A grade')
    }
}
findGrade(98)
findGrade(87)


/*
Perform arithmetic operations on two numbers
Function `evalNumbers()` prints the result after evaluating arithmetic operations between two numbers of addition, multiplication, division, and modulus in JavaScript.

Print result of num1+num2 if operation is “add”
Print result of num1-num2 if operation is “subtract”
Print result of num1*num2 if operation is “multiply”
Print result of num1/num2 if operation is “divide”
Print result of num1%num2 if operation is “modulus”
Else print “Invalid operation”
*/

/*
Find check if a year is leap year or not
Function `checkLeapYear()` find if the given year is a leap year or not by using %, !=, && and || operators in JavaScript.


If year is divisble by 4 and not divisble by 100 then print “leap year”.
Or if year is divisible by 400 then print “leap year”.
Else print “not a leap year”.
*/

/*
 Find number of days in a given month
Function `findDaysInMonth()` finds the number of days in a given month of a year.
If month is outside the range of 1 and 12 print “Invalid month”.
If month is equal to 2 ie, February print “29 days” if leap year else print “28 days” .
Else if month is equal to 4, 6, 9 or 11 print “30 days”.
Else print “31 days”.
*/

// // check if the number if positive, negative or zero