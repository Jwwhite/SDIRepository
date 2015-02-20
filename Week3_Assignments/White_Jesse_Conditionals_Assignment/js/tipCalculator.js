/**
 * Created by Jesse White on 2/19/2015
 * Assignment: Conditionals
 */

// Sets up the variables for use in the program
var amountSpent;
var divideTip;
var peoplePresent;
var moreTip;
var moreAmount;
var tip;
var tipPercent = 0.18;

// Prompts the user for the meal cost
amountSpent = prompt("Please enter the total cost of the meal.");

// Catches user error
if(amountSpent == "") {                                               // if nothing is typed in the prompt
    console.log("You didn't type anything, please try again.");       // print this
    amountSpent = prompt("Please enter the total cost of the meal."); // then prompt again
}

// Calculates how much the tip should be
tip = Number(amountSpent) * tipPercent;

// Sets the variable to display as a float
tip = parseFloat(tip);

// Displays the current tip amount to the user
console.log("The tip is currently $" + tip);

// Prompts the user to decide if they want to divide the tip
divideTip = prompt("Would you like to divide the tip amongst your friends?" +
    "\n\t\t\t\t(Y or N)");

// Catches user error
if (divideTip == "") {                                                              // if nothing is typed in the prompt
    console.log("You didn't enter anything.");                                      // print this
    divideTip = prompt("Would you like to divide the tip amongst your friends?" +
    "\n\t\t\t\t(Y or N)");                                                          // then prompt again
}

if (divideTip == "Y" || divideTip == "y") {                 // If divideTip equals yes
    peoplePresent = prompt("How many people are present?"); // prompt for how many people there are
    tip = tip / peoplePresent;                              // then divide the tip among the amount of people
    tip = parseFloat(tip);                                  // Sets the variable to display as a float
    console.log("You each should pay $" + tip);             // tell the user how much they should each pay

} else if (divideTip == "N" || divideTip == "n") {                                // Otherwise if divideTip equals no
    moreTip = prompt("Do you think the waiter deserves a larger tip?\n" +
    "\t\t\t\t(Y or N)");                                                          // ask if the waiter needs a bigger tip

    if (moreTip == "") {                                                              // if moreTip is blank
        console.log("You didn't enter anything.");                                    // print this
        moreTip = prompt("Do you think the waiter deserves a larger tip?\n(Y or N)"); // then prompt again
    }

    if (moreTip == "Y" || moreTip == "y") {                              // If moreTip equals yes
        moreAmount = prompt("How much more would you like to give?");    // prompt for the extra amount
        if(moreAmount == "") {                                              // if moreAmount is blank
            console.log("You didn't type anything.");                       // print this
            moreAmount = prompt("How much more would you like to give?");   // then prompt again
        }
        tip = parseFloat(tip);                                           // Converts tip from a string to a float
        moreAmount = parseFloat(moreAmount);                             // Converts moreAmount from a string to a float
        tip = tip + moreAmount;                                          // Adds the extra amount to the tip
        (tip >= 15.00) ? console.log("Your tip was $" + tip +
        " you are a very generous person.") :
            console.log("Your tip total is $" + tip +".");               // If tip is $15 or more print a different string

    } else if (moreTip == "N" || moreTip == "n") {                       // If moreTip equals no
        console.log("Your tip total is $" + tip + ".");                  // print this to the user
    } else {
        console.log("Your tip total is $" + tip + ".");                  // Catches the user entering a wrong string twice
    }

} else {
    console.log("Your tip total is $" + tip + ".");                      // Catches the user entering a wrong string twice
}