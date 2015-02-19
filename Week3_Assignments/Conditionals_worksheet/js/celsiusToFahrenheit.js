/**
 * Created by Jesse White on 2/17/15
 * Assignment: Conditionals Worksheet
 */

// Gets the temperature to be converted by the user
var currentTemp = prompt("What is the temperature you would like converted?");

// Takes the string from the user and converts it to a Number
currentTemp = Number(currentTemp);

// Prompts for the type to convert to
var convertInput = prompt("What would you like to convert to?\nType \"C\" for celsius" +
    " or type \"F\" for fahrenheit.");

// Runs if the user wants the temp in celsius
if(convertInput == "C"){
    // Does the calculation to convert from C to F
    var cVersion = (currentTemp - 32) * 5 / 9;
    // Prints the result to the user
    alert("The temperature in celsius is " + cVersion);
}

// Runs if the user wants the temp in fahrenheit
if (convertInput == "F"){
    // Does the calculation to convert from F to C
    var fVersion = currentTemp * 9 / 5 + 32;
    // Prints the result to the user
    alert("The temperature in fahrenheit is " + fVersion);
}