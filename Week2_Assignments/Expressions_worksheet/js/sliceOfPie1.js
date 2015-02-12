/**
 * Created by Jesse White on 2/12/2015
 * Assignment: Expression Worksheet
 */

// Declares a variable to store the amount of people at the party
var partyGoers = prompt("How many people are at the party?");

// Declares a variable to store the amount of pizzas ordered
var pizzasOrdered = prompt("How many pizzas did you order?");

// Sets the number of slices per pizza
var slicesPerPizza = 8;

// Determines how many slices total by multiplying the
// slices by how many pizzas were ordered
var pizzaSlices = pizzasOrdered * slicesPerPizza;

// Determines how many slices each party-goer got by dividing
// the total amount of pizza slices by how many people where at the party
var slicesGotten = pizzaSlices / partyGoers;

// Writes the amount of slices gotten by each party-goer to the console
console.log("Each person ate " + slicesGotten + " slices of pizza at the party.");