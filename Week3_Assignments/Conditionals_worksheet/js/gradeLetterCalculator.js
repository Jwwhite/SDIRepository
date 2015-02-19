/**
 * Created by Jesse White on 2/18/15
 * Assignment: Conditionals Worksheet
 */

// Prompts for the user to input their grade
var grade = prompt("What is your grade in percent?");

// If grade is between the specified percentage print the following grade
if (grade <= 69) {
    console.log("You have a " + grade
    + "%, which means you have earned a(n) F in the class!");
} else if (grade >= 70 && grade <= 72) {
    console.log("You have a " + grade
    + "%, which means you have earned a(n) D in the class!");
} else if (grade >= 73 && grade <= 75) {
    console.log("You have a " + grade
    + "%, which means you have earned a(n) C in the class!");
} else if (grade >= 76 && grade <= 79) {
    console.log("You have a " + grade
    + "%, which means you have earned a(n) C+ in the class!");
} else if (grade >= 80 && grade <= 84) {
    console.log("You have a " + grade
    + "%, which means you have earned a(n) B in the class!");
} else if (grade >= 85 && grade <= 89) {
    console.log("You have a " + grade
    + "%, which means you have earned a(n) B+ in the class!");
} else if (grade >= 90 && grade <= 94) {
    console.log("You have a " + grade
    + "%, which means you have earned a(n) A in the class!");
} else if (grade >= 95 && grade <= 100) {
    console.log("You have a " + grade
    + "%, which means you have earned a(n) A+ in the class!");
} else if (grade > 100) {
    console.log("I'm sorry, that is not an actual grade percentage.");
}

