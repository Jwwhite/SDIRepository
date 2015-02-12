/**
 * Created by Jesse on 2/11/15.
 */

// alert("JS is working");

// Declares variables for holding portions of a phone number
var areaCode = 407;
var firstPart = 203;
var secPart = 4529;
var dash = "-";

// Declares a variable to hold the compiled phone number
var phoneNo = String(areaCode) + dash + String(firstPart) + dash + String(secPart);

// Displays the variable phoneNo to the console
console.log(phoneNo);