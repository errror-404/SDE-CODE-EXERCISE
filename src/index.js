const fs = require("fs");

let lenghtOfStreet = [];
let streets = [];
let SS = 0;

/**
 * this function will return the number of vowels in a word
 * @param {string} word
 *
 * @returns {number} number of vowels in a word
 */

const getNumberOfVowels = (word) => {
  const vowels = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[i])) {
      count++;
    }
  }
  return count;
};

/**
 * this function will return the number of consonants in a word
 * @param {string} word
 *
 * @returns {number} number of consonants in a word
 */

const getConsonants = (word) => {
  const consonants = [
    "b",
    "B",
    "c",
    "C",
    "d",
    "D",
    "f",
    "F",
    "g",
    "G",
    "h",
    "H",
    "j",
    "J",
    "k",
    "K",
    "l",
    "L",
    "m",
    "M",
    "n",
    "N",
    "p",
    "P",
    "q",
    "Q",
    "r",
    "R",
    "s",
    "S",
    "t",
    "T",
    "v",
    "V",
    "w",
    "W",
    "x",
    "X",
    "y",
    "Y",
    "z",
    "Z",
  ];
  let count = 0;

  for (let i = 0; i < word.length; i++) {
    if (consonants.includes(word[i])) {
      count++;
    }
  }
  return count;
};

/**
 * this function will return the greatest common factor of two numbers
 * @param {number} a
 * @param {number} b
 * @returns {number[]} greatest common factor of two numbers
 *
 *
 */

const getCommonFactors = (a, b) => {
  let factors = [];
  for (let i = 0; i <= Math.min(a, b); i++) {
    if (a % i === 0 && b % i === 0 && i !== 1) {
      factors.push(i);
    }
  }
  return factors;
};

fs.readFile("./data/streets.txt", "utf-8", (err, data) => {
  if (err) return console.log(err); // if there is an error, log it and return

  streets = data.split("\r\n"); // split the data by new line

  lenghtOfStreet = streets.map((street) => street.length); // get the length of each street
});

fs.readFile("./data/drivers.txt", "utf-8", (err, data) => {
  if (err) return console.log(err); // if there is an error, log it

  let names = data.split("\r\n"); // split the data into an array of names

  let lengthOfNames = names.map((name) => name.length); // get the length of each name

  let numberOfConsonants = names.map((name) => getConsonants(name)); // get the number of consonants in each name

  let numberOfVowels = names.map((name) => {
    return getNumberOfVowels(name);
  }); // get the number of vowels in each name

  SS = lenghtOfStreet.map((street, index) => {
    if (street % 2 === 0) {
      return numberOfVowels[index] * 1.5;
    }
    if (street % 2 !== 0) {
      return numberOfConsonants[index] * 1;
    }
  }); // get the SS of each driver

  lenghtOfStreet.forEach((street, index) => {
    if (
      getCommonFactors(street, lengthOfNames[index]).length == 0 ||
      getCommonFactors(street, lengthOfNames[index]) == 1
    ) {
      return;
    }
    console.log(getCommonFactors(street, lengthOfNames[index]), index);
    SS[index] = SS[index] + SS[index] * 0.5;
  }); // add 50% to the SS of each driver if the length of the street and the length of the name have a common factor

  console.table({
    names,
    streets,
    SS,
  }); // print the table
});
