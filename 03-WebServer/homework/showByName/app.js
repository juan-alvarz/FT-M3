var fs = require("fs");
var http = require("http");
// var img = require("./images");

// Escribí acá tu servidor
http
  .createServer((req, res) => {
    if (req.url === "/") {
      res.writeHead(200, { "Content-type": "text/plain" });
      res.end("Hola Mundo!");
    } else if (req.url === "/arcoiris_doge") {
      res.writeHead(200, { "Content-Type": "image/jpg" });
      var image = fs.readFileSync(__dirname + "/images/arcoiris_doge.jpg");
      res.end(image);
    } else if (req.url === "/badboy") {
      res.writeHead(200, { "Content-type": "image/jpg" });
      var image = fs.readFileSync(__dirname + "/images/badboy_doge.jpg");
      res.end(image);
    } else if (req.url === "/code_doge") {
      res.writeHead(200, { "Content-type": "image/jpg" });
      var image = fs.readFileSync(__dirname + "/images/code_doge.jpg");
      res.end(image);
    } else if (req.url === "/resaca_doge") {
      res.writeHead(200, { "Content-type": "image/jpg" });
      var image = fs.readFileSync(__dirname + "/images/resaca_doge.jpg");
      res.end(image);
    } else if (req.url === "/retrato_doge") {
      res.writeHead(200, { "Content-type": "image/jpg" });
      var image = fs.readFileSync(__dirname + "/images/retrato_doge.jpg");
      res.end(image);
    } else if (re.url === "/sexy_doge") {
      res.writeHead(200, { "Content-type": "image/jpg" });
      var image = fs.readFileSync(__dirname + "/images/sexy_doge.jpg");
      res.end(image);
    } else {
      res.writeHead(418);
      res.end();
    }
  })
  .listen(1337, "127.0.0.1");

//
var port = 1337;

http
  .createServer((req, res) => {})
  .listen(port, "127.0.0.1", () => console.log("Listening on port: " + port));
