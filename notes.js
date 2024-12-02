import React from "react";
import ReactDom from "react-dom";
import App from "./components/App";


const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<App />); 

var numbers = [3, 56, 2, 48, 5];


var newNumbers =numbers.map(function (x) {
    return x * x;
});

// Arrow function version of map
const secNumbers = numbers.map( x => x * x)


var numbers = [3, 56, 2, 48, 5]; 




// Map create a new array by doing something with each item
function double(x){
    return x * 2;
}

const newNumbers = numbers.map( x => x * 2 ); // its gong to expect a function. 
console.log(newNumbers); 


// Filter - Creates a new array by keeping the items that only returns true
const newNumbers1 = numbers.filter (num => num < 10);
console.log(newNumbers1); 


// Reduce - Accumulates a value by doing something to each item in an array
var newNumber2 = numbers.reduce( (accumulator, currentNumber) => accumulator + currentNumber); 


console.log(newNumber2); 


// Find - returns the first item that satisfies a condition
const newNumber3 = numbers.find(num => num > 10); 

console.log(newNumber3);


// FindIndex - returns the first index that satisfies a condition
const newIndex = numbers.findIndex(num =>num > 10);

console.log(newIndex);