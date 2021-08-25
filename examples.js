const { getLast, GenerateFrom, GenerateNumber, GenerateString } = require('./index');


console.log(GenerateString());

console.log(getLast());

console.log(GenerateNumber());

const randomArray = [0, 1, 2, 3, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
const number = GenerateFrom(randomArray, 6);
console.log(number)