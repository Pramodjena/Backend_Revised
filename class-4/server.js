// import modules
const fs = require("fs");
const crypto = require("crypto");
const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const filePath = "./file.json";

// api
app.get("/api/user", (req, res) => {
  let data = [
    { name: "John", age: 30 },
    { name: "Pablo", age: 60 },
  ];

  res.status(200).json(data);
});

app.get("/api/create-file", (req, res) => {
  const hash = crypto.createHash("sha256");
  hash.update("Pramod123");
  const hashedPassword = hash.digest("hex");
  fs.writeFileSync(filePath, JSON.stringify({ password: hashedPassword }));
  res.status(200).json({ password: hashedPassword });
});

const port = process.env.PORT || 4500;
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
