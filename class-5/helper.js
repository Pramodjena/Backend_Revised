const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "db.json");
// const filePath = path.resolve("data.json");

// CRUD Operation :
// Read
const read = () => {
  const data = fs.readFileSync(filePath);
  return JSON.parse(data);
};

const write = (user) => {
  const data = read();
  const jsonData = JSON.parse(data); // object

  jsonData.frontend.push({ id: jsonData.frontend.length + 1, ...user });
  const dataString = JSON.stringify(jsonData); // json
  fs.writeFileSync(filePath, dataString);
};
