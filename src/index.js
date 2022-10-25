const fs = require("fs");

let lenghtOfStreet = 0;

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

fs.readFile("./data/streets.txt", "utf-8", (err, data) => {
  if (err) return console.log(err);
  let streets = data.split("\r\n");
});

fs.readFile("./data/drivers.txt", "utf-8", (err, data) => {
  if (err) throw err;

  let names = data.split("\r\n");
  //names lenght withot spaces
  let namesLength = names.map((name) => name.replace(/\s/g, "").length);
  //names without spaces
  let namesWithoutSpaces = names.map((name) => name.replace(/\s/g, ""));

  let numberOfVowels = namesWithoutSpaces.map((name) => {
    return getNumberOfVowels(name);
  });

  console.table({ numberOfVowels, names });
});
