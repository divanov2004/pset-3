const readlineSync = require("readline-sync");

const month = readlineSync.question("\nEnter a month: ");
const month_formatted = month.toUpperCase();

if (month_formatted == "JANUARY" || month_formatted == "JAN") {
  console.log("\n31 days.\n");
}
else if (month_formatted == "FEBRUARY" || month_formatted == "FEB") {
  console.log("\n28 or 29 days.\n");
}
else if (month_formatted == "MARCH" || month_formatted == "MAR") {
  console.log("\n31 days.\n");
}
else if (month_formatted == "APR" || month_formatted == "APRIL") {
  console.log("\n30 days.\n");
}
else if (month_formatted == "MAY") {
  console.log("\n31 days.\n");
}
else if (month_formatted == "JUNE" || month_formatted == "JUN") {
  console.log("\n30 days.\n");
}
else if (month_formatted == "JULY" || month_formatted == "JUL") {
  console.log("\n31 days.\n");
}
else if (month_formatted == "AUGUST" || month_formatted == "AUG") {
  console.log("\n31 days.\n");
}
else if (month_formatted == "SEPTEMBER" || month_formatted == "SEP") {
  console.log("\n30 days.\n");
}
else if (month_formatted == "OCTOBER" || month_formatted == "OCT") {
  console.log("\n31 days.\n");
}
else if (month_formatted == "NOVEMBER" || month_formatted == "NOV") {
  console.log("\n30 days.\n");
}
else if (month_formatted == "DECEMBER" || month_formatted == "DEC") {
  console.log("\n31 days.\n");
}
else {
  console.log("\nInvalid.\n");
}
