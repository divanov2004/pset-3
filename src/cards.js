const readlineSync = require("readline-sync");

const card = readlineSync.question("\nEnter a playing card: ");

const card_name = card.toUpperCase();

if (card_name == "AS") {
  console.log("\nAce of Spades.\n");
}
else if (card_name == "AC") {
  console.log("\nAce of Clubs.\n");
}
else if (card_name == "AH") {
  console.log("\nAce of Hearts.\n");
}
else if (card_name == "KD") {
  console.log("\nKing of Diamonds.\n");
}
else if (card_name == "KS") {
  console.log("\nKing of Spades.\n");
}
else if (card_name == "KH") {
  console.log("\nKing of Hearts.\n");
}
else if (card_name == "KC") {
  console.log("\nKing of Clubs.\n");
}
else if (card_name == "QD") {
  console.log("\nQueen of Diamonds.\n");
}
else if (card_name == "QS") {
  console.log("\nQueen of Spades.\n");
}
else if (card_name == "QH") {
  console.log("\nQueen of Hearts\n");
}
else if (card_name == "QC") {
  console.log("\nQueen of Clubs.\n");
}
else if (card_name == "JS") {
  console.log("\nJack of Spades.\n");
}
else if (card_name == "JD") {
  console.log("\nJack of Diamonds.\n");
}
else if (card_name == "JH") {
  console.log("\nJack of Hearts.\n");
}
else if (card_name == "JC") {
  console.log("\nJack of Clubs.\n");
}
else if (card_name == "TS") {
  console.log("\nTen of Spades.\n");
}
else if (card_name == "TD") {
  console.log("\nTen of Diamonds.\n");
}
else if (card_name == "TH") {
  console.log("\nTen of Hearts.\n");
}
else if (card_name == "TC") {
  console.log("\nTen of Clubs.\n");
}
else if (card_name == "9S") {
  console.log("\nNine of Spades.\n");
}
else if (card_name == "9D") {
  console.log("\nNine of Diamonds.\n");
}
else if (card_name == "9H") {
  console.log("\nNine of Hearts.\n");
}
else if (card_name == "9C") {
  console.log("\nNine of Clubs.\n");
}
else if (card_name == "8S") {
  console.log("\nEight of Spades.\n");
}
else if (card_name == "8D") {
  console.log("\nEight of Diamonds.\n");
}
else if (card_name == "8H") {
  console.log("\nEight of Hearts.\n");
}
else if (card_name == "8C") {
  console.log("\nEight of Clubs.\n");
}
else if (card_name == "7S") {
  console.log("\nSeven of Spades.\n");
}
else if (card_name == "7D") {
  console.log("\nSeven of Diamonds.\n");
}
else if (card_name == "7H") {
  console.log("\nSeven of Hearts.\n");
}
else if (card_name == "7C") {
  console.log("\nSeven of Clubs.\n");
}
else if (card_name == "6S") {
  console.log("\nSix of Spades.\n");
}
else if (card_name == "6D") {
  console.log("\nSix of Diamonds.\n");
}
else if (card_name == "6H") {
  console.log("\nSix of Hearts.\n");
}
else if (card_name == "6C") {
  console.log("\nSix of Clubs.\n");
}
else if (card_name == "5S") {
  console.log("\nFive of Spades.\n");
}
else if (card_name == "5D") {
  console.log("\nFive of Diamonds.\n");
}
else if (card_name == "5H") {
  console.log("\nFive of Hearts.\n");
}
else if (card_name == "5C") {
  console.log("\nFive of Clubs.\n");
}
else if (card_name == "4S") {
  console.log("\nFour of Spades.\n");
}
else if (card_name == "4D") {
  console.log("\nFour of Diamonds.\n");
}
else if (card_name == "4H") {
  console.log("\nFour of Hearts.\n");
}
else if (card_name == "4C") {
  console.log("\nFour of Clubs.\n");
}
else if (card_name == "3S") {
  console.log("\nThree of Spades.\n");
}
else if (card_name == "3D") {
  console.log("\nThree of Diamonds.\n");
}
else if (card_name == "3H") {
  console.log("\nThree of Hearts.\n");
}
else if (card_name == "3C") {
  console.log("\nThree of Clubs.\n");
}
else if (card_name == "2S") {
  console.log("\nTwo of Spades.\n");
}
else if (card_name == "2D") {
  console.log("\nTwo of Diamonds.\n");
}
else if (card_name == "2H") {
  console.log("\nTwo of Hearts.\n");
}
else if (card_name == "2C") {
  console.log("\nTwo of Clubs.\n");
}
else {
  console.log("\nInvalid\n");
}
