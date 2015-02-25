/**
 * Created by Jesse White on 2/24/15
 * Assignment: Functions Worksheet
 */

// Declares the variables
var lbs = prompt("What is the victims weight?");
var result;

console.log(lbs + "lbs");

// Sets up a function to calculate the number of bee stings
function beeStings(weight) {
    var stingsPerLbs = 8.666666667;         // Sets the number of stings to lbs
    var noOfStings = weight * stingsPerLbs; // Calculates the number of stings to cause a fatality
    return noOfStings;                      // Returns that number

}

// Stores the number of stings to cause a fatality in the var result
result = beeStings(lbs);

// Prints the result to the console
console.log("It takes " + result + " bee stings to kill this animal.");
