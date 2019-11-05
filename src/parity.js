const readlineSync = require("readline-sync");

const number = Number(readlineSync.question("\nEnter an integer: "));

if (!Number.isInteger(number)) {
    console.log("\nInvalid.");
} else if (number < Number.MIN_SAFE_INTEGER || number > Number.MAX_SAFE_INTEGER) {
    console.log("\nInvalid.");
} else {
    if (number%2==1) {
      console.log("\nOdd.")
    }
    else if (number%2==0 && !number==0) {
      console.log("\nEven.")
    }
    else {
      console.log("\nZero.")
    }
}
