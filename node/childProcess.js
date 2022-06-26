let cp = require("child_process");
// console.log("trying to open calculator");
// cp.execSync("start calc");
// cp.execSync("code");
// console.log("opened calculator");

console.log(cp.execSync("node test.js"));

let content = cp.execSync("node test.js");
console.log(""+content);



