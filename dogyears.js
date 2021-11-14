import { argv } from "process";

// this is my age in human years
let myAge = process.argv[2];

// needs for the dogyears calculaton
let earlyYears = 2;
earlyYears *= 10.5;

// later years, what we calculate differently, than the early years
let laterYears = myAge - 2;
laterYears *= 4;

//console.log(earlyYears, laterYears);

// calculation of my age in dog years;
let myAgeInDogYears = earlyYears + laterYears;

let myName = "Csaba".toLowerCase();

// where everything comes together
console.log(
  `My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`
);
