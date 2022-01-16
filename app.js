// Add GZIP compression to improve performance
const compression = require("compression");
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

//! NÃO USAR console.log()
// essa função é síncrona e não é recomendada para uso em produção, pois trava
// os outros processos.

/**
 * Para logs em production
 * winston - https://www.npmjs.com/package/winston
 * morgan - https://www.npmjs.com/package/morgan
 * bunyan - https://www.npmjs.com/package/bunyan
 */

app.use(compression());
app.listen(port, console.log(`Example app listening on port ${port}!`));
