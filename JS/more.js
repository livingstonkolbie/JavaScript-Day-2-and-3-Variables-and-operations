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

// Day 2 ADAVANCED PROBS
// ADV problem1

let firstName = "kolbs";
let age = 33;
let isStudent = false;

console.log("my name is ", firstName , "i am " , age , "and it is ", isStudent , "that i am a student.");
console.log(firstName, age, isStudent);
console.log(typeof firstName, typeof age, typeof isStudent);

// ADV problem2

function convertToFarenheit(celsius) {
    const farenheit = (celsius * 9/5) + 32;
    return farenheit;
}

const celsiusValue = 25;
const result = convertToFarenheit(celsiusValue);

console.log(`${celsiusValue}\u00B0C is equal to ${result}\u00B0F`);
console.log(`Celcius input type: ${typeof celsiusValue}`);
console.log(`Farenheit result type: ${typeof result}`);

// ADV problem3

let price1 = 30;
let price2 = 20;
let price3 = 10;

let discountThreshold = 2;
let discount = 5;

let sum = price1 + price2 + price3;
console.log(sum);


// Day 3 
// problem1

let num1 = 10;
let num2 = 5;

// let sum = num1 + num2;
let difference = num1 - num2;
let product = num1 * num2;
let quotient = num1 / num2;
let remainder = num1 % num2;

// console.log(sum, difference, product, quotient, remainder);

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


