const readlineSync = require("readline-sync");

console.log("\nEnter three numbers.");

const number1 = Number(readlineSync.question("\n"));

const number2 = Number(readlineSync.question(""));

const number3 = Number(readlineSync.question(""));

if (Number.isNaN(number1) || Number.isNaN(number2) || Number.isNaN(number3)) {
    console.log("\nInvalid.");
} else if (number1 < Number.MIN_SAFE_INTEGER || number1 > Number.MAX_SAFE_INTEGER || number2 < Number.MIN_SAFE_INTEGER || number2 > Number.MAX_SAFE_INTEGER || number3 < Number.MIN_SAFE_INTEGER || number3 > Number.MAX_SAFE_INTEGER) {
    console.log("\nInvalid.");
} else {
    if (number1<number2 && number2<number3) {
      console.log("\nStrictly increasing.")
    }
    else if (number1==number2 && number2==number3) {
      console.log("\nEqual.")
    }
    else if (number1>number2 && number2>number3) {
      console.log("\nStrictly decreasing.")
    }
    else if (number1<=number2 && number2<=number3) {
      console.log("\nIncreasing.")
    }
    else if (number1>=number2 && number2>=number3) {
      console.log("\nDecreasing.")
    }
    else {
      console.log("\nUnordered.")
    }
}
