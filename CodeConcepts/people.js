// modular code demonstration

const people = ["haris", "bilal", "ali"];
const age = ["20", "6", "1"];
console.log(people);

// but what if we explicity want to export a certain part of the code

module.exports = people; // only way to export a variable to another file

//now exporting multiple properties using objects

module.exports;
{
  people, age;
}
