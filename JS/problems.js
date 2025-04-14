// Day 2
// problem 1 - Variable Declarations

var age = 32;
let firstName = "Kolbie";
const isAStudent = true;

// console.log(isAStudent);

//problem 2 - Exploring Data Types

let temp = 80;
greeting = "Hello";
isLoggedIn = true;
// let emptyValue = null;
notDefined;
let uniqueId = Symbol("id"); // don't worry about this

// console.log(typeof uniqueId);

// problem 3 - Variable Scope - *will have an in depth lession on this later

function displayAge() {
    let localAge = 28;
    console.log("Local Age:", localAge);
}

displayAge (); //this will call it in the console
console.log("Global Age", age);

// Day 3
// problem 1 - Simple Arithmetic Calculations

numOne = 5;
numTwo = 2;

sum = numOne + numTwo;
difference = numOne - numTwo;
product = numOne * numTwo;
quotient = numOne / numTwo;
remainder = numOne % numTwo;

numOne++;
numTwo--; // cannot do increment and decrement inside console.log parentheses

console.log(numOne);

console.log("Sum: " + (numOne + numTwo)); // another way
console.log("Sum: ", numOne + numTwo); // another way

// problem 2 - Variable Assignment Opperations

let score = 50;
score += 25;
score *= 2;
score -= 30;

console.log(score); // 120

// problem 3 - Comapring Values

a = 10;
b = '10';

console.log(a == b);
console.log(a === b);

let isEqual = "Is Equal: " + (a == b);
let isStrictEqual = "Is Strict Equal: " + (a === b);
let check = 5 > a < 15;

console.log(isEqual);
console.log(isStrictEqual);
console.log(check); //or you can do it this next way
console.log(a > 5 && a < 15);


// Advanced Problems
// problem 1 - Salary Adjuster 

let baseSalary = 3000;
let bonusPercentage = 0.10;
let deduction = 150;

let bonusAmount = baseSalary * bonusPercentage;