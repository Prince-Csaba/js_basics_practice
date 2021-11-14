import { argv } from "process";

//this is the initial data, it should stay constant
const kelvin = process.argv[2] || 293;

// Celsius grades temperature, calculates from Kelvin grades
let celsius = kelvin - 273;

// Fahrenheit grades temperature, calculates from Celsius grades
let fahrenheit = Math.floor(celsius * (9 / 5) + 32);

console.log(
  `The temperature is ${kelvin} Kelvin grades, ${celsius} Celsius grades and ${fahrenheit} Fahrenheit grades`
);
