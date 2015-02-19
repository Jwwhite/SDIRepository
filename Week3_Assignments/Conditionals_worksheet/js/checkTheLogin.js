/**
 * Created by Jesse White on 2/18/15
 * Assignment: Conditionals Worksheet
 */

// Sets the correct login information
var correctName = "Jesse";
var correctPass = "White";

// Prompts the user for their Name and Password
var inputName = prompt("Please enter your Name.");
var inputPass = prompt("Please enter your Password");

// If both the user name and password are correct
// display welcome message
if (inputName === correctName) {
    if (inputPass === correctPass) {
        alert("Welcome, " + correctName + "!");
    }
}

// If password or username is wrong display the
// appropriate message
if (inputName != correctName) {
    alert("User not found. Try again.");
} else if (inputPass != correctPass) {
    alert("Password does not match our records.");
}