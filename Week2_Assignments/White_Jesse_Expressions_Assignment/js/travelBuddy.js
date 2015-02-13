/**
 * Created by Jesse White on 2/12/2015
 * Assignment: Expressions
 */

// Creates an array to hold all of the variables
var mileage = [];

// Prompts the user to enter how long they will be on the road
var time = prompt("How long are you going to travel?");

// Prompts the user to enter how fast they will be traveling
var speed = prompt("How fast are you going to travel?");

// Prompts the user to enter how many miles to the gallon they get
var gasPerMile = prompt("How many miles to the gallon does your vehicle get?");

// Prompts the user to enter the price of gas
//var gasPrice = prompt("How much is Gas?");

// The following lines add the information from the variables to
// the array
mileage[0] = time;
mileage[1] = speed;
mileage[2] = gasPerMile;
//mileage[3] = gasPrice;

// Calculates the distance traveled
var distance = mileage[0] / mileage[1];

// Adds the distance to the array
mileage[4] = distance;

// Calculates the amount of gas burned
var gasBurned = mileage[4] / mileage[2];

mileage[5] = gasBurned;

alert("You have traveled " + mileage[4] + "miles and you have burned " + mileage[2] + "gallons.");
