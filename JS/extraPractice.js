//At home practice
//day 2 problem 1

var age = 32;
let firstName = 'Kolbie';
const isStudent = true;

console.log(age);
console.log(firstName);
console.log(isStudent);

//day 2 problem 2

let greeting = `hello my name is ${firstName}, i am ${age}, and it is ${isStudent} that i am a student`

console.log(greeting);

//day 2 problem 3

function convertToFahrenheit(celsius) {
    fahrenheit = celsius * (9/5) + 32;
    console.log(`${celsius}°C is ${fahrenheit}°F`);
}

convertToFahrenheit(25);
