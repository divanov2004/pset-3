const readlineSync = require("readline-sync");

const userCard = readlineSync.question("\nEnter a playing card: ");
const card = userCard.toUpperCase();

if (card == "AS") {
  console.log("\nAce of Spades.\n");
} else if (card == "AC") {
    console.log("\nAce of Clubs.\n");
} else if (card == "AH") {
    console.log("\nAce of Hearts.\n");
} else if (card == "KD") {
    console.log("\nKing of Diamonds.\n");
} else if (card == "KS") {
    console.log("\nKing of Spades.\n");
} else if (card == "KH") {
    console.log("\nKing of Hearts.\n");
} else if (card == "KC") {
    console.log("\nKing of Clubs.\n");
} else if (card == "QD") {
    console.log("\nQueen of Diamonds.\n");
} else if (card == "QS") {
    console.log("\nQueen of Spades.\n");
} else if (card == "QH") {
    console.log("\nQueen of Hearts\n");
} else if (card == "QC") {
    console.log("\nQueen of Clubs.\n");
} else if (card == "JS") {
    console.log("\nJack of Spades.\n");
} else if (card == "JD") {
    console.log("\nJack of Diamonds.\n");
} else if (card == "JH") {
    console.log("\nJack of Hearts.\n");
} else if (card == "JC") {
    console.log("\nJack of Clubs.\n");
} else if (card == "TS") {
    console.log("\nTen of Spades.\n");
} else if (card == "TD") {
    console.log("\nTen of Diamonds.\n");
} else if (card == "TH") {
    console.log("\nTen of Hearts.\n");
} else if (card == "TC") {
    console.log("\nTen of Clubs.\n");
} else if (card == "9S") {
    console.log("\nNine of Spades.\n");
} else if (card == "9D") {
    console.log("\nNine of Diamonds.\n");
} else if (card == "9H") {
    console.log("\nNine of Hearts.\n");
} else if (card == "9C") {
    console.log("\nNine of Clubs.\n");
} else if (card == "8S") {
    console.log("\nEight of Spades.\n");
} else if (card == "8D") {
    console.log("\nEight of Diamonds.\n");
} else if (card == "8H") {
    console.log("\nEight of Hearts.\n");
} else if (card == "8C") {
    console.log("\nEight of Clubs.\n");
} else if (card == "7S") {
    console.log("\nSeven of Spades.\n");
} else if (card == "7D") {
    console.log("\nSeven of Diamonds.\n");
} else if (card == "7H") {
    console.log("\nSeven of Hearts.\n");
} else if (card == "7C") {
    console.log("\nSeven of Clubs.\n");
} else if (card == "6S") {
    console.log("\nSix of Spades.\n");
} else if (card == "6D") {
    console.log("\nSix of Diamonds.\n");
} else if (card == "6H") {
    console.log("\nSix of Hearts.\n");
} else if (card == "6C") {
    console.log("\nSix of Clubs.\n");
} else if (card == "5S") {
    console.log("\nFive of Spades.\n");
} else if (card == "5D") {
    console.log("\nFive of Diamonds.\n");
} else if (card == "5H") {
    console.log("\nFive of Hearts.\n");
} else if (card == "5C") {
    console.log("\nFive of Clubs.\n");
} else if (card == "4S") {
    console.log("\nFour of Spades.\n");
} else if (card == "4D") {
    console.log("\nFour of Diamonds.\n");
} else if (card == "4H") {
    console.log("\nFour of Hearts.\n");
} else if (card == "4C") {
    console.log("\nFour of Clubs.\n");
} else if (card == "3S") {
    console.log("\nThree of Spades.\n");
} else if (card == "3D") {
    console.log("\nThree of Diamonds.\n");
} else if (card == "3H") {
    console.log("\nThree of Hearts.\n");
} else if (card == "3C") {
    console.log("\nThree of Clubs.\n");
} else if (card == "2S") {
    console.log("\nTwo of Spades.\n");
} else if (card == "2D") {
    console.log("\nTwo of Diamonds.\n");
} else if (card == "2H") {
    console.log("\nTwo of Hearts.\n");
} else if (card == "2C") {
    console.log("\nTwo of Clubs.\n");
} else {
    console.log("\nInvalid.\n");
}
