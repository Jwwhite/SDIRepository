/**
 * Created by Jesse White on 2/18/15
 * Assignment: Conditionals Worksheet
 */

// Sets the array to store tire pressure
var tires = [];

// Prompts the user for all four tires pressure
var fl = prompt("What is the pressure in your front left tire?");
var fr = prompt("What is the pressure in your front right tire?");
var bl = prompt("What is the pressure in your back left tire?");
var br = prompt("What is the pressure in your back right tire?");

fl = Number(fl);
fr = Number(fr);
bl = Number(bl);
br = Number(br);

// stores the tire pressures given by the user in the array
tires[0] = fl;
tires[1] = fr;
tires[2] = bl;
tires[3] = br;

// The console logs were used for debugging
//console.log("front two " + tires[0], tires[1]);
//console.log("back two " + tires[2], tires[3]);

if (tires[0] == tires[1]) { // Checks to see if the front two tires are the same pressure

    if (tires[2] == tires[3]) { // If the front two tires are the same this checks the back two
        alert("The tires pass spec!"); // If the back two match and the front two match this prints

    } else if (tires[2] != tires[3]) { // If the back two tires are not the same pressure
        alert("Get your tires checked out!"); // print this
    }
} else if (tires[0] != tires[1]) { // If the front two tires are not the same pressure
    alert("Get your tires checked out!"); // print this
}