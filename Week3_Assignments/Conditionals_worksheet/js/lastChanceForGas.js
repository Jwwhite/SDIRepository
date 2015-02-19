/**
 * Created by Jesse White on 2/17/15
 * Assignment: Conditionals Worksheet
 */

// Prompts for the values needed to make the calculations
var mpg = prompt("How many miles to the gallon does your car get?");
var gasTankLeft = prompt("How much gas is left in your tank? (In percentage)");
var gasTank = prompt("How many gallons does your tank hold?");

// Converts the strings gotten from the prompts to numbers
mpg = Number(mpg);
gasTankLeft = Number(gasTankLeft);
gasTank = Number(gasTank);

// Converts the percentage to a decimal point
gasTankLeft = gasTankLeft / 100;

// Calculates how much gas is left in the tank
var gasLeft = gasTank * gasTankLeft;
// console.log("There is " + gasLeft + " left in the tank");

// Calculates how many miles are left in the tank
var gasDistance = gasLeft * mpg;
// console.log(gasDistance);

// Decides if there is enough gas to travel 200 miles
if(gasDistance > 200) {
    alert("Yes, you can make it without stopping for gas!")
}

// If there is less than 200 miles left in the tank this code runs
else {
    alert("You only have " + gasDistance
    + " gallons of gas in your tank, better get gas now while you can!")
}