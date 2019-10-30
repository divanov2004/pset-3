const readlineSync = require("readline-sync");

const MIN = 0.01;
const MAX = 0.99;

const amount = Number(readlineSync.question("\nEnter a dollar amount: "));

const quarterValue = 0.25;
const dimeValue = 0.10;
const nickelValue = 0.05;
const pennyValue = 0.01;











if (Number.isNaN(amount)) {
    // print your error message here
} else if (amount < MIN || amount > MAX) {
    // print your error message here
} else {
console.log("");
}
