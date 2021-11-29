const assertEqual = require('../assertEqual');
const tail = require('../tail');

const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log(tail(words)); // this should return ["Lighthouse", "Labs"]
assertEqual(words.length, 3); //"this is to make sure our function doesnt modify the original array"
