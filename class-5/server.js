const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

app.get("/", (req, res) => {
  res.status(200).send({ msg: "Server Running.." });
});

// CRUD Operation
// Create


const port = process.env.PORT || 4500;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
