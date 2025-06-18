// modular code demonstration

const xyz = require("./people");

console.log(xyz); //this returns an empty object

//now if we want only one property from the object containing multiple being exported

const { ages } = require("./people");

console.log(ages);

// lets trying using these techniques to find information about the os

const os = require("os");
console.log(os.platform(), os.homedir);
