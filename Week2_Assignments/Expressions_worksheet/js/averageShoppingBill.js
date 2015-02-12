/**
 * Created by Jesse White on 2/12/2015
 * Assignment: Expression Worksheet
 */

// Creates an array named shoppingBills
var shoppingBills = [];

// The following 5 lines prompt the user to input 5 weeks worth of spending on groceries
var firstWeek = prompt("Enter your shopping bill for the first week.");
var secondWeek = prompt("Enter your shopping bill for the second week.");
var thirdWeek = prompt("Enter your shopping bill for the third week.");
var fourthWeek = prompt("Enter your shopping bill for the fourth week.");
var fifthWeek = prompt("Enter your shopping bill for the fifth week.");

// The following 5 lines store the user input as a number in the array shoppingBills
shoppingBills[0] = Number(firstWeek);
shoppingBills[1] = Number(secondWeek);
shoppingBills[2] = Number(thirdWeek);
shoppingBills[3] = Number(fourthWeek);
shoppingBills[4] = Number(fifthWeek);

//console.log(shoppingBills); // used this to debug and make sure that the numbers were stored correctly

// Adds together the five numbers stored in the array by the user to obtain the total
var total = shoppingBills[0] + shoppingBills[1] + shoppingBills[2] +
    shoppingBills[3] + shoppingBills[4];

//console.log(total); // used this to debug and ensure that the numbers were being added and not concatenated

// Stores the number five to average the total (because there were five weeks)
var fiveWeeks = 5;

// Obtains the average by dividing the total amount spent by how many weeks it was spent over
var average = total / fiveWeeks;

//console.log(average); // used this to debug and ensure that the division was correct

// Displays to the console how much was spent total and what the average is
console.log("You have spent a total of $" + total + " on groceries over 5 weeks." +
    " That is an average of $" + average + " per week.");