const readlineSync = require("readline-sync");

const temperature = Number(readlineSync.question("\nEnter a temperature: "));

const temperature_scale = readlineSync.question("Enter a scale: ");

const temperature_type = temperature_scale.toUpperCase();

if (temperature>Number.MAX_SAFE_INTEGER || temperature<Number.MIN_SAFE_INTEGER) {
  console.log("\nInvalid.\n");
}
else if (Number.isNaN(temperature)) {
  console.log("\nInvalid.\n");
}
else if (temperature_type == "F") {
  if (temperature <= 32) {
    console.log("\nSolid.\n");
  }
  else if (temperature >= 212) {
    console.log("\nGas.\n");
  }
  else {
    console.log("\nLiquid.\n");
  }
}
else if (temperature_type == "K") {
  if (temperature <= 273.15) {
    console.log("\nSolid.\n");
  }
  else if (temperature >= 373.15) {
    console.log("\nGas.\n");
  }
  else {
    console.log("\nLiquid.\n");
  }
}
else if (temperature_type == "C") {
  if (temperature <= 0) {
    console.log("\nSolid.\n");
  }
  else if (temperature >= 100) {
    console.log("\nGas.\n");
  }
  else {
    console.log("\nLiquid.\n");
  }
}
else {
  console.log("\nInvalid.\n");
}
