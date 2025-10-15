console.log("hello");

const os = require("os");
const path = require("path");
const math = require("./math");

console.log(os.type());
console.log(os.version());
console.log(os.homedir());

console.log(__dirname);
console.log(__filename);

console.log(math.add(2, 3));
