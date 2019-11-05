const readlineSync = require("readline-sync");

const MIN = 0.01;
const MAX = 0.99;

const amount = Number(readlineSync.question("\nEnter a dollar amount: "));

if (Number.isNaN(amount)) {
    console.log("\nInvalid.");
} else if (amount < MIN || amount > MAX) {
    console.log("\nInvalid.");
} else {
    const quarters = Math.floor(amount/0.25);
    const dimes = Math.floor((amount - 0.25*quarters)/0.1);
    const nickels = Math.floor((amount - 0.25*quarters-0.1*dimes)/0.05);
    const pennies = Math.ceil((amount - 0.25*quarters-0.1*dimes-0.05*nickels)/0.01);
    
    console.log("\n" + quarters + " quarters, " + dimes + " dimes, " + nickels + " nickels, and " + pennies + " pennies.");
}
