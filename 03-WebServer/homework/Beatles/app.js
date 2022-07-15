var http = require("http");
var fs = require("fs");

var beatles = [
  {
    name: "John Lennon",
    birthdate: "09/10/1940",
    profilePic:
      "https://blogs.correiobraziliense.com.br/trilhasonora/wp-content/uploads/sites/39/2020/10/CBNFOT081020100047-550x549.jpg",
  },
  {
    name: "Paul McCartney",
    birthdate: "18/06/1942",
    profilePic:
      "http://gazettereview.com/wp-content/uploads/2016/06/paul-mccartney.jpg",
  },
  {
    name: "George Harrison",
    birthdate: "25/02/1946",
    profilePic:
      "https://canaldosbeatles.files.wordpress.com/2012/02/george-george-harrison-8321345-438-600.jpg",
  },
  {
    name: "Richard Starkey",
    birthdate: "07/08/1940",
    profilePic:
      "http://cp91279.biography.com/BIO_Bio-Shorts_0_Ringo-Starr_SF_HD_768x432-16x9.jpg",
  },
];
var btName = [
  "John%20Lennon",
  "Paul%20McCartney",
  "George%20Harrison",
  "Richard%20Starkey",
];

http
  .createServer((req, res) => {
    if (req.url === "/") {
      res.writeHead(200, { "Content-type": "text/html" });
      var html = fs.readFileSync(__dirname + "/index.html");
      res.end(html);
    }

    //PROFILE PAGE
    else if (req.url === "/" + btName[0]) {
      res.writeHead(200, { "Content-type": "text/html" });
      var html = fs.readFileSync(__dirname + "/beatle.html", "utf-8");
      var nombre = beatles[0].name;
      var date = beatles[0].birthdate;
      var img = beatles[0].profilePic;
      html = html.replace("{nombre}", nombre);
      html = html.replace("{date}", date);
      html = html.replace("{img}", img);
      res.end(html);
    } else if (req.url === "/" + btName[1]) {
      res.writeHead(200, { "Content-type": "text/html" });
      var html = fs.readFileSync(__dirname + "/beatle.html", "utf-8");
      var nombre = beatles[1].name;
      var date = beatles[1].birthdate;
      var img = beatles[1].profilePic;
      html = html.replace("{nombre}", nombre);
      html = html.replace("{date}", date);
      html = html.replace("{img}", img);
      res.end(html);
    } else if (req.url === "/" + btName[2]) {
      res.writeHead(200, { "Content-type": "text/html" });
      var html = fs.readFileSync(__dirname + "/beatle.html", "utf-8");
      var nombre = beatles[2].name;
      var date = beatles[2].birthdate;
      var img = beatles[2].profilePic;
      html = html.replace("{nombre}", nombre);
      html = html.replace("{date}", date);
      html = html.replace("{img}", img);
      res.end(html);
    } else if (req.url === "/" + btName[3]) {
      res.writeHead(200, { "Content-type": "text/html" });
      var html = fs.readFileSync(__dirname + "/beatle.html", "utf-8");
      var nombre = beatles[3].name;
      var date = beatles[3].birthdate;
      var img = beatles[3].profilePic;
      html = html.replace("{nombre}", nombre);
      html = html.replace("{date}", date);
      html = html.replace("{img}", img);
      res.end(html);
    }

    //API
    else if (req.url === "/api") {
      res.writeHead(200, { "Content-type": "application/json" });
      res.end(JSON.stringify(beatles));
    } else if (req.url === `/api/${btName[0]}`) {
      res.writeHead(200, { "Content-type": "application/json" });
      res.end(JSON.stringify(beatles[0]));
    } else if (req.url === `/api/${btName[1]}`) {
      res.writeHead(200, { "Content-type": "application/json" });
      res.end(JSON.stringify(beatles[1]));
    } else if (req.url === `/api/${btName[2]}`) {
      res.writeHead(200, { "Content-type": "application/json" });
      res.end(JSON.stringify(beatles[2]));
    } else if (req.url === `/api/${btName[3]}`) {
      res.writeHead(200, { "Content-type": "application/json" });
      res.end(JSON.stringify(beatles[3]));
    } else {
      res.writeHead(418);
      res.end();
    }
  })
  .listen(1337, "127.0.0.1");

http
  .createServer((req, res) => {
    if (req.url === "/api") {
      res.writeHead(200, { "Content-type": "application/json" });
      res.end(JSON.stringify(beatles));
    } else if (req.url.substring(0, 5) === "/api/") {
      var url = req.url.split("/").pop(); // [api, john%20lennon]

      url = url.replace("%20", " ");
      var found = beatles.find((e) => e.name === url);
      if (found) {
        res.writeHead(200, { "Content-type": "application/json" });
        res.end(JSON.stringify(found));
      } else {
        res.writeHead(404, { "Content-type": "application/json" });
        res.end({ result: "not found" });
      }
    }

    if (req.url === "/") {
      res.writeHead(200, { "Content-type": "" });
      var template = fs.readFileSync(__dirname + "/index.html", "utf8");
      res.end(template);
    }

    var urlBeatle = req.url.split("/").pop();
    var foundBeatle = beatles.find((e) => e.name === urlBeatle);

    if (foundBeatle) {
      res.writeHead(200, { "Content-type": "text/html" });
      var template2 = fs.readFileSync(__dirname + "/");
      res.end(template2);
    }

    //replace
    template2.replace(/{name}/g, foundBeatle); /* reemplaza todo */
  })
  .listen(3000, "127.0.0.1", () => console.log("listening on port 3000"));
