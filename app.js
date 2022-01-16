const express = require("express");

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Hello Cambada");
});

// Add route to say hello
app.get("/hello/:name", (req, res) => {
  res.send(`Hello ${req.params.name}`);
});

app.get("/hello", (req, res) => {
  res.send("E ai mundo!");
});

app.listen(port, console.log(`Example app listening on port ${port}!`));
