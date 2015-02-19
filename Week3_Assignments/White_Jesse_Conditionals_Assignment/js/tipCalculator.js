/**
 * Created by Jesse White on 2/19/2015
 * Assignment:
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
    alert("You didn't type anything, please try again.");             // print this
    amountSpent = prompt("Please enter the total cost of the meal."); // then prompt again
}

// Calculates how much the tip should be
tip = Number(amountSpent) * tipPercent;

// Sets var tip to display only two decimal points
tip = tip.toFixed(2);

// console.log(tip); // Used for debugging

//
alert("The tip is currently $" + tip);

// Prompts the user to decide if they want to divide the tip
divideTip = prompt("Would you like to divide the tip amongst your friends?" +
    "\n\t\t\t\t(Y or N)");

// Catches user error
if (divideTip == "") {                                                              // if nothing is typed in the prompt
    alert("You didn't enter anything.");                                            // print this
    divideTip = prompt("Would you like to divide the tip amongst your friends?" +
    "\n\t\t\t\t(Y or N)");                                                        // then prompt again
}

if (divideTip == "Y" || divideTip == "y") {                 // If divideTip equals yes
    peoplePresent = prompt("How many people are present?"); // prompt for how many people there are
    tip = tip / peoplePresent;                              // then divide the tip among the amount of people
    tip = tip.toFixed(2);                                   // set the decimal point to two
    alert("You each should pay $" + tip);                   // tell the user how much they should each pay

} else if (divideTip == "N" || divideTip == "n") {                                // Otherwise if divideTip equals no
    moreTip = prompt("Do you think the waiter deserves a larger tip?\n" +
    "\t\t\t\t(Y or N)");                                                          // ask if the waiter needs a bigger tip

    if (moreTip == "") {                                                              // if moreTip is blank
        alert("You didn't enter anything.");                                          // print this
        moreTip = prompt("Do you think the waiter deserves a larger tip?\n(Y or N)"); // then prompt again
    }

    if (moreTip == "Y" || moreTip == "y") {                              // If moreTip equals yes
        moreAmount = prompt("How much more would you like to give?");    // prompt for the extra amount
        if(moreAmount == "") {                                              // if moreAmount is blank
            alert("You didn't type anything.");                             // print this
            moreAmount = prompt("How much more would you like to give?");   // then prompt again
        }
        tip = tip + moreAmount;                                          // Adds the extra amount to the tip
        tip = tip.toFixed(2);                                            // set the decimal point to two
        alert("Your final tip comes to $" + tip);                        // print the final tip amount
    }


}

(tip >= 15.00) ? alert("Your tip was $" + tip + " you are a very generous person.") : alert("Your tip total is $" + tip +".");
