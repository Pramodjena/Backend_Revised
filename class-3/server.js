const path = require("path"); // cjs

// const filePath = "C:UsershpOneDriveDesktopBackend_Revisedclass-3server.js";
// const baseName = path.basename(filePath);
// console.log(baseName);
// console.log(path.dirname(filePath));

const os = require("os"); // cjs
// console.log(os.platform()); // win32
// console.log(os.type()); // windows_NT
// console.log(os.freemem()); // 1757855744
console.log(os.homedir());

const EventEmitter = require("events");
// const event = new EventEmitter(); // constructor function

// event.on("greetings", (name) => {
//   console.log(`Hello ${name}`);
// });

// event.emit("greetings", "Pramod");
// event.emit("greetings", "Pablo");

const crypto = require("crypto"); // storing password securely

// const hash = crypto.createHash("sha256").update("Pramod123").digest("hex");
// console.log(hash); // 008c70392e3abfbd0fa47bbc2ed96aa99bd49e159727fcba0f2e6abeb3a9d601

const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.question("Enter your name ", (name) => {
//   console.log(`Hello ${name}`);
//   rl.close();
// });
// rl.question("Enter your age", (age) => {
//   console.log(`You are ${age} years old`);
//   rl.close();
// });

const dns = require("dns");

// dns.lookup("qlith.com", (err, address) => {
//   if (err) console.log(err);
//   else console.log("Qlith IP Address", address);
// });

// dns.resolve4("qlith.com", (err, address) => {
//   if (err) console.log(err);
//   else console.log("Qlith IP Address", address);
// });

// dns.resolveMx("qlith.com", (err, address) => {
//   if (err) console.log(err);
//   else console.log("Qlith MX Records", address);
// });
