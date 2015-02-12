/**
 * Created by Jesse White on 2/12/2015
 * Assignment: Expression Worksheet
 */

// Prompts the user for the name of the item and stores it in itemName
var itemName = prompt("What item is it that you are purchasing?");

// Prompts the user for the original price of the item and stores it in originalPrice
var originalPrice = prompt("What is the original price for the item?");

// Prompts the user for the discount percentage and stores it in discount
var discount = prompt("What is the discount percentage?");

// Prompts the user for the sales tax in their state
var tax = prompt("What percentage is sales tax in your state?");

// Takes the percent given by discount and turns it into a decimal point
var disDecimal = Number(discount) / 100;

// Gives the amount discounted by multiplying the original
// price by the discount decimal point
var orPriceDis = Number(originalPrice) * disDecimal;

// Subtracts the amount discounted to get the new price of the item after the discount
var finalDisPrice = Number(originalPrice) - orPriceDis;

// Takes the percent given by tax and turns it into a decimal point
var taxDecimal = Number(tax) / 100;

// Calculates how much tax to add to the discounted price
// by taking the original price discounted and multiplying it by
// the tax decimal point
var taxPriceDis = orPriceDis * taxDecimal;

// Gives the final price after tax has been added
var finalTaxPrice = finalDisPrice + taxPriceDis;

// Prints the result to the console
console.log("Your " + itemName + " was originally $" + originalPrice + ", but after a " + discount +
    "% discount, it is now $" + finalDisPrice + " without tax, and $" + finalTaxPrice + " with tax.");