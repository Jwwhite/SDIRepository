/**
 * Created by Jesse White on 2/25/15
 * Assignment: Functions
 */

// Sets up the variables
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var lottoNums = [];
var select;
var userIn = prompt("What lottery numbers would you like? " +
    "The Florida lottery or the Powerball?\n\n\t\t\t(Type \"F\"" +
    " for Florida or \"P\" for the Powerball.)");

// Validates the user input
while(userIn == "") {
    userIn = prompt("What lottery numbers would you like? " +
    "The Florida lottery or the Powerball?\n\n\t\t\t(Type \"F\"" +
    " for Florida or \"P\" for the Powerball.)");
}

while(lottoNums >= 9) {
    select = Math.floor(Math.random() * 10);
    floridaLotto(select);
}
console.log(lottoNums);


function floridaLotto(n) {
    n = Number(n);
    while(n < 53) {

    }
    return n;
}

/*
function powerball(n) {

}

if(userIn == "F" || userIn == "f") {
    floridaLotto();

} else if(userIn == "P" || userIn == "p") {
    powerball();
}
*/