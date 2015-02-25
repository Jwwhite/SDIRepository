/**
 * Created by Jesse White on 2/24/15
 * Assignment: Functions Worksheet
 */

// Sets the variables
var result;
var diameter = prompt("What is the diameter of your circle?");

// Creates a function that excepts a parameter
function calculation(d) {
    var circumference = d * Math.PI; // takes the parameter given and calculates the circumference
    return circumference;            // returns the circumference
}

// stores the returned value to the var result
result = calculation(diameter);

// prints the result to the console
console.log("The circumference of the circle is " + result);