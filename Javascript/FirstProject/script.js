//  This is my first time using JavaScript!

// Task 1: Variables


/* Data types in JavaScript:

Undefined,
Null,
Boolean,
String,
Symbol,
Number,
Object.

*/ 

// Decloration
var myName; 

// Assignment
var myName = 'Harvey'; // Functions like a normal variable

let ourName = 'Harvey'; // Functions within a scope

const myAge = '15'; // Stays constant throughout

// Task 2: Output
console.log(myName)

// Task 3: Basic Operations/Math 
var adding = 10 + 43;

var subtraction = 43 - 10;

var division = 50 / 10;

var multiplication = 50 * 10;

console.log(adding, subtraction, division, multiplication);

// Task 4: Incrementing/Decrementing
adding++;
subtraction--;

console.log(adding, subtraction)


// Task 6: Remainder, Basic If Statement and Length

var sentence_length = "Hello World!".length;

if (sentence_length % 2 == 0) {
    console.log("Number has an even amount of characters!")
} 

else {
    console.log("Number has an odd amount of characters")
}

// Task 7: Indexing using Bracket Notations

var sentence = "Hello World!";
console.log(sentence[7])
console.log(sentence[sentence_length-1])

// Task 8: Basic Functions and Basic Concatination


function checkisPrime(sentence_length) {
    if (sentence_length % 2)  {
        console.log(sentence_length + " is prime!")
    }
}
