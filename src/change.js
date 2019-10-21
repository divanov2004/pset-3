const readlineSync = require("readline-sync");

const minimum = 0.01;
const maximum = 0.99;

const amount = Number(readlineSync.question("\nEnter a dollar amount: "));

if (Number.isNaN(amount)) {
    console.log("NaN");
// print your error message here
} else if (amount < minimum || amount > maximum) {
    console.log("Out of range");
// print your error message here
} else {
    console.log("Make change");
// write your code for making change here
}
