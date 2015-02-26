/**
 * Created by Jesse White on 2/26/15
 * Assignment: Functions
 */

// Sets up the variables
var validation;
var select;
var noStore;
var i = 0;
var floridaNo = 1;
var powerballNo = 1;
var noList = [];
var lottoNo = [];
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

    if (userIn == "F" || userIn == "f") {
        return "F";

    } else if (userIn == "P" || userIn == "p") {
        return "P";
    }

}

// uses the validate function to check the user
// input and store it in the variable validation
validation = validate(userInput);

if (validation == "F") {
    // while the floridaNo is less than or equal to 52
    while (floridaNo <= 53) {
        noList[i] = floridaNo; // adds the new number to the array
        i++;                   // adds one to the i variable
        floridaNo++;           // adds one to the floridaNo variable
    }
    console.log(noList);
    // var i equals 0, while i is less than or equals 5, add one to i
    for (i = 0; i <= 5; i++) {
        select = Math.floor(Math.random() * (floridaNo - 1)); // select a number randomly from one to 53 - 1 for every loop
        noStore = noList[select]; // uses the random number from above and selects a number from the array
        noList.splice(select, 1); // removes the number selected
        while (noStore === undefined) {                            // if the number selected equals undefined
            select = Math.floor(Math.random() * (floridaNo - 1));
            noStore = noList[select];
            console.log(noStore + " un");
        }

        lottoNo[i] = noStore; // store the filtered number in the indexed location
        console.log(lottoNo);
    }

} else if (validation == "P") {
    // var i equals 0, while i is less than or equals 59, add one to i
    while (powerballNo <= 59) {
        noList[i] = powerballNo; // adds the new number to the array
        i++;                     // adds one to the i variable
        powerballNo++;           // adds one to the powerballNo
    }
    console.log(noList);
    // var i equals 0, while i is less than or equals 5, add one to i
    for (i = 0; i <= 5; i++) {
        select = Math.floor(Math.random() * (powerballNo - 1)); // select a number randomly from one to 59 - 1 for every loop
        noStore = noList[select]; // uses the random number from above and selects a number from the array
        noList.splice(select, 1); // removes the number selected
        while (noStore === undefined) {                            // if the number selected equals undefined
            select = Math.floor(Math.random() * (powerballNo - 1));
            noStore = noList[select];
            console.log(noStore + " un");
        }

        lottoNo[i] = noStore; // store the filtered number in the indexed location
        console.log(lottoNo);
    }

}



console.log("Your lottery Numbers are " + lottoNo[0] + "-" + lottoNo[1]
    + "-" + lottoNo[2] + "-" + lottoNo[3] + "-" + lottoNo[4] + "-"
    + lottoNo[5] + ".");