const readlineSync = require("readline-sync");

let grade = Number(readlineSync.question("\nEnter a grade: "));

const A_PLUS = 100;
const A_MINUS = 90;
const B = 80;
const C = 70;
const D = 60;
const F = 0;

if (!Number.isNaN(grade)) {
  if (grade >= A_MINUS && grade <= A_PLUS) {
    console.log("\nYou received an A.");
  }
  else if (grade >= B && grade < A_PLUS) {
    console.log("\nYou received a B.");
  }
  else if (grade >= C && grade < B) {
    console.log("\nYou received a C.");
  }
  else if (grade >= D && grade < C) {
    console.log("\nYou received a D.");
  }
  else if (grade >= F && grade < D) {
    console.log("\nYou received a F.");
  }
  else {
    console.log("\nInvalid.")
  }
}
else {
    console.log("\nInvalid.")
}
