/**
 * Created by Jesse on 2/18/15.
 */

// alert("JS is working");

var kidHeight = 52;
var minHeight = 48;
var wParentHieght = 45;

if (kidHeight > minHeight) {
    console.log("You can ride the coaster!")
} else if (kidHeight > wParentHieght) {
    console.log("You can ride, but only with a parent present.")
} else {
    console.log("Sorry kid, you've got some growing to do first!");
}