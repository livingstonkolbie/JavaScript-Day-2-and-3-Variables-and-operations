// Day 2
// problem1

// var age = 32;
// let firstName = "kolbie";
// const isStudent = true;

// console.log(age);
// console.log(firstName);
// console.log(isStudent);

// problem2

let temperature = 80;
// let greeting = "Hello!";
let isLoggedIn = true;
let emptyValue = null;
let notDefined;
let uniqueId = Symbol("id");

console.log(typeof temperature);
// console.log(typeof greeting);
console.log(typeof isLoggedIn);
console.log(typeof emptyValue);
console.log(typeof notDefined);
console.log(typeof uniqueId);

// problem3

function displayAge() {
    let localAge = 35;
    console.log("Local Age: ", localAge);
}

// console.log("Global Age: ", age);
// console.log(localAge); // << this does not work

// Day 2 advanced problems
// problem1

let firstName = "kolbs";
let age = 33;
let isStudent = false;

console.log(firstName, age, isStudent);

// Day 3 
// problem1

let num1 = 10;
let num2 = 5;

let sum = num1 + num2;
let difference = num1 - num2;
let product = num1 * num2;
let quotient = num1 / num2;
let remainder = num1 % num2;

console.log(sum, difference, product, quotient, remainder);

// problem2

let score = 50;
score += 25;
score *= 2;
score -= 30;

console.log(score);

// problem3

let a = 10;
let b = "10";

console.log(a == b);
console.log(a === b);
console.log(a > 5 && a < 15); 



