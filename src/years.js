const readlineSync = require("readline-sync");

let year = Number(readlineSync.question("\nEnter a year: "));

if (!Number.isNaN(year)) {
  if (year>0 && year<= Number.MAX_SAFE_INTEGER) {
    if (year%4==0) {
      if (year%100!=0) {
        console.log("\n" + year + " is a leap year.");
      }
      else {
        if (year%400==0) {
          console.log("\n" + year + " is a leap year.");
        }
        else {
          console.log("\n" + year + " is not a leap year.");
        }
      }
    }
    else {
      console.log("\n" + year + " is not a leap year.");
    }
  }
  else {
    console.log("\nInvalid.");
  }
}
else {
    console.log("\nInvalid.");
}
