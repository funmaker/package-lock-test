const colors = require("colors");
const config = require("./node_modules/colors/package.json");

console.log("Using " + colors.bold.red(config.version) + " colors!");
