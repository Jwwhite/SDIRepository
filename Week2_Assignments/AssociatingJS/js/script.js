/**
 * Created by Jesse on 2/24/15.
 */

// alert("JS is working");

var one = prompt("Number one:");
var two = prompt("Number two:");

var calcArea = function(width, height) {
    var area = width * height;
    return area;
}

console.log(calcArea(one, two));