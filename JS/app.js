//  Variable Declarations
// var is a legacy variable keyword
var age = 32;
// "blocked scoped" variable declaration 
let name = "Kolbie Livingston";
// constant declaration for variables that should not be updated
const isStudent = false;


// primative data types
let temperature = 79.6;  // Number
let greeting = "Hello!"; // String
let isLoggedIn = false;  // Boolean
let emptyValue;          // null
let notDefined;          // undefined 

// basic setup for sending data to HTML console
console.log("Hey Trey!");

console.log(isLoggedIn);

// arithmetic operators 
let numOne = 10;
let numTwo = 3;

let sum = numOne + numTwo;
console.log(sum); // 13
let difference = numOne - numTwo;
console.log(difference); // 7
let product = numOne * numTwo;
console.log(product); // 30
let quotient = numOne / numTwo;
console.log(quotient); // 3.333333333335
let remainder = numOne % numTwo;
console.log(remainder); // 1

// increment and decrement 
numOne++; 
console.log(numOne); // 11
numOne--;
console.log(numOne); // 10

// assignment operators
let numThree = 5;

numThree += 2;
console.log(numThree);

numThree *= 3;
console.log(numThree);




// Day 4: Combining Variables, data  types, and Operators

// Calculating Total Price with Discounts

let originalPrice = 100;
let discountRate = 0.2;
let isMember = true;

// console.log(originalPrice);

let discountAmount = originalPrice * discountRate;
let discountedPrice = originalPrice - discountAmount;
// console.log(discountedPrice);

// Additional discount for memebers

if (isMember) {
    discountedPrice -= 10;
};

console.log("Discounted Price: ", discountedPrice);



