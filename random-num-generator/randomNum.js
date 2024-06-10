//Random number generator

//let randomNum = math.random();

//will generate a randon number between 0 and 1..
//let suppose we need to generate a random number between 0 to 6..
//Math.trunc will eleminate the decimal preceedence values
//let randomNum =Math.trunc(Math.random() * 6);

//to get the number from 1 to 6,
let randomNum =Math.trunc(Math.random() * 6)+1;
console.log(randomNum);

//to get a random number between a range of numbers
const min = 35;
const max = 99;
let randomNumberInARange = Math.trunc(Math.random()*(max-min))+min;
console.log(randomNumberInARange);

