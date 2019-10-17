const readlineSync = require("readline-sync");

const minimum = 0.01;
const maximum = 0.99;

const amount = Number(readlineSync.question("\nEnter a dollar amount: "));

if (amount < minimum || amount > maximum) {
    // print your error message here
} else {
    // write your code for making change here
}
