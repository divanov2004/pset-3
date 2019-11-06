const readlineSync = require("readline-sync");

const month = readlineSync.question("\nEnter a month: ");
const monthBefore = month.toUpperCase();

if (monthBefore == "JANUARY" || monthBefore == "JAN") {
  console.log("\n31 days.\n");
}
else if (monthBefore == "FEBRUARY" || monthBefore == "FEB") {
  console.log("\n28 or 29 days.\n");
}
else if (monthBefore == "MARCH" || monthBefore == "MAR") {
  console.log("\n31 days.\n");
}
else if (monthBefore == "APR" || monthBefore == "APRIL") {
  console.log("\n30 days.\n");
}
else if (monthBefore == "MAY") {
  console.log("\n31 days.\n");
}
else if (monthBefore == "JUNE" || monthBefore == "JUN") {
  console.log("\n30 days.\n");
}
else if (monthBefore == "JULY" || monthBefore == "JUL") {
  console.log("\n31 days.\n");
}
else if (monthBefore == "AUGUST" || monthBefore == "AUG") {
  console.log("\n31 days.\n");
}
else if (monthBefore == "SEPTEMBER" || monthBefore == "SEP") {
  console.log("\n30 days.\n");
}
else if (monthBefore == "OCTOBER" || monthBefore == "OCT") {
  console.log("\n31 days.\n");
}
else if (monthBefore == "NOVEMBER" || monthBefore == "NOV") {
  console.log("\n30 days.\n");
}
else if (monthBefore == "DECEMBER" || monthBefore == "DEC") {
  console.log("\n31 days.\n");
}
else {
  console.log("\nInvalid.\n");
}
