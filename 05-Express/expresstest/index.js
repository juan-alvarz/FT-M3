const express = require("express");
const morgan = require("morgan");
var app = express();

//para usar middleware
app.use(express.json()); //?

app.use(morgan("dev"));

// path y función
app.get("/", (req, res) => {
  //req => lo que nos llega: params, query, body ...
  //res => lo que enviamos
  res.send("Hello from the other side!");
});

app.get("/ab?cd", function (req, res) {
  res.send("ab?cd");
});

app.get("/ab*cd", function (req, res) {
  res.send("ab*cd");
});

//pasando parámetros
app.get("/api/:id", function (req, res) {
  const { id } = req.params;
  //ir a la dataBase, buscar el post con el id = :id
  res.json({ parametro: req.params.id });
});

app.get("/users", function (req, res) {
  let pais = req.query.pais;
  //filtrar pais de origen
  //res

  res.json(req.query);
});

app.get("/form", function (req, res) {
  //filtrar pais de origen
  //res
  res.json(req.body);
});

app.listen(3000, () => console.log("Listening on port: 3000"));
