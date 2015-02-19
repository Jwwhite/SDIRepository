/**
 * Created by Jesse White on 2/16/2015
 * Assignment: Conditionals Worksheet
 */

// Sets the weight to 250;
var weight = 250;

// Prompts the user for the weight of the contestant
var contestant = prompt("How much does the contestant weigh?");

// checks to see if the weight entered was enough
if(contestant < weight) {
    // if the weight was enough print this
    alert("The competitor needs to gain some weight!");
// if the statement evaluates false
} else {
    // print this
    alert("The competitor qualifies for the heavyweight division.");
}