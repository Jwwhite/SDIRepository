/**
 * Created by Jesse White on 2/18/15
 * Assignment: Conditionals Worksheet
 */

// Sets up variables
var age = prompt("What is your age?");
var time = prompt("What time is it?\n(Rounded to the nearest hour)");
var discountAge = true;
var discountTime = false;

// Determines discount based on age
if (age > 10 && age < 55) {
    discountAge = false;
}

// Used for debugging
//console.log("Age", discountAge);

// Determines discount based on time
if (time >= 3 && time <=5){
    discountTime = true;
}

// Used for debugging
//console.log("Time", discountTime);

if (discountAge) { // If the time discount applies
    alert("The ticket price is $7.00"); // print this

} else if (discountTime) { // If the age discount applies
    alert("The ticket price is $7.00"); // print this

} else { // if no discounts apply
    alert("The ticket price is $12.00"); // print this
}