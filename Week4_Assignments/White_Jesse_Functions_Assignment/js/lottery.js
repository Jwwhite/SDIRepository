/**
 * Created by Jesse White on 2/26/15
 * Assignment: Functions
 */

// Sets up the variables
var validation;       // for storing the value from function validate
var lottoNumbers;     // for storing the generated array of numbers
var florida = 1;      // holds the counting value
var floridaNo = 53;   // holds the value to be counted up to
var powerball = 1;    // holds the counting value
var powerballNo = 59; // holds the value to be counted up to
var userInput = prompt("What lottery numbers would you like? " +
    "The Florida lottery or the Powerball?\n\n\t\t\t(Type \"F\"" +
    " for Florida or \"P\" for the Powerball.)");

// a function for validating user input
function validate(userIn) {

    // Validates the user input
    while (userIn == "") {
        userIn = prompt("What lottery numbers would you like? " +
        "The Florida lottery or the Powerball?\n\n\t\t\t(Type \"F\"" +
        " for Florida or \"P\" for the Powerball.)");
    }
    // if the user input equals F or f
    if (userIn == "F" || userIn == "f") {
        return "F"; // return an uppercase F

    // else if the user input equals P or p
    } else if (userIn == "P" || userIn == "p") {
        return "P"; // return an uppercase P
    } else {
        // Prevents the user from breaking the program
        return console.log("What you have entered is invalid.");
    }

}

// for generating the lottery numbers
function numberGen(lottoType, numbersToGen) {
    var select;       // holds the value of the index to be selected
    var noStore;      // holds the number to store in the array
    var i = 0;        // int counting variable
    var noList = [];  // holds the numbers from min to max
    var lottoNo = []; // holds the random lottery numbers selected

    // while the lottery type is less than or equal to how many numbers to generate
    while (lottoType <= numbersToGen) {
        noList[i] = lottoType; // adds the new number to the array
        i++;                   // adds one to the i variable
        lottoType++;           // adds one to the lottery numbers

    }

    // var i equals 0, while i is less than or equals 5, add one to i
    for (i = 0; i <= 5; i++) {
        select = Math.floor(Math.random() * lottoType); // select a number randomly from one to the max for the lottery
        noStore = noList[select]; // uses the random number from above and selects a number from the array
        noList.splice(select, 1); // removes the number selected
        while (noStore === undefined) {                      // if the number selected equals undefined
            select = Math.floor(Math.random() * lottoType);  // repeat the selection process
            noStore = noList[select];

        }

        lottoNo[i] = noStore; // store the filtered number in the indexed location
    }
    // return the generated lottery numbers
    return lottoNo;
}

// uses the validate function to check the user
// input and store it in the variable validation
validation = validate(userInput);

// if validation equals F
if (validation == "F") {
    // call number generator to generate an array for florida
    lottoNumbers = numberGen(florida, floridaNo);

// else if validation equals P
} else if (validation == "P") {
    // call number generator to generate an array for the powerball
    lottoNumbers = numberGen(powerball, powerballNo);

    // while the last number is greater then 35 re-randomize
    while (lottoNumbers[5] > 35) {
        lottoNumbers = numberGen(powerball, powerballNo);
    }

} else {
    // Prevents the user from breaking the program
    console.log("Please run the program again");
}

// catches user error and only displays the console log if they have selected one of the two options
if (validation == "F" || validation == "P") {
// print the result to the user
    console.log("Your lottery Numbers are " + lottoNumbers[0] + "-" + lottoNumbers[1]
    + "-" + lottoNumbers[2] + "-" + lottoNumbers[3] + "-" + lottoNumbers[4] + "-"
    + lottoNumbers[5] + ".");
} else {
    // Prevents the user from breaking the program
    console.log("and enter one of the listed options.")
}