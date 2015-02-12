/**
 * Created by Jesse White on 2/11/2015
 * Assignment: Expression Worksheet
 */

// Prompts the user to input the age of sparky in years for conversion
var actualAge = prompt("How old is Sparky in years?", "example: 6");

// Declares the variable that will contain the constant 7
var seven = 7;

// Calculates how many years sparky is in dog years by multiplying
// the actual years by seven
var dogYears = actualAge * seven;

console.log("Sparky is " + actualAge + " human years old which is " + dogYears + " in dog years.");