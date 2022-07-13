var fs = require("fs");
const { request } = require("http");
/* var request = require("request");
 */
module.exports = {
  /* date: function (params, done) {
    done(Date());
  }, */
  date: (params, done) => {
    done(Date());
  },

  pwd: (params, done) => {
    done(process.env.PWD);
  },

  echo: (params, done) => {
    done(params.join(" "));
  },

  ls: (params, done) => {
    fs.readdir(".", (err, files) => {
      if (err) throw err;
      var output = "\n ";
      files.forEach((f) => {
        output = output + f + "\n ";
      });
      done(output);
    });
  },

  cat: (args, done) => {
    fs.readFile(args[0], "utf-8", (err, data) => {
      if (err) throw err;
      done(data);
    });
  },

  head: (args, done) => {
    fs.readFile(args[0], "utf-8", (err, data) => {
      if (err) throw err;
      let lines = data.split("\n").splice(0, 10).join("\n");
      done(lines);
    });
  },

  /*   head: function (params, print) {
    fs.readFile(params[0], "utf8", function (err, data) {
      if (err) throw err;
      let lines = data.split("\n").splice(0, 10).join("\n");
      print(lines);
    });
  },
 */
  tail: (args, done) => {
    fs.readFile(args[0], "utf-8", (err, data) => {
      if (err) throw err;
      let lines = data.split("\n").splice(0, 10).join("\n");
      done(lines);
    });
  },
  /*   tail: function (params, print) {
    fs.readFile(params[0], "utf8", function (err, data) {
      if (err) throw err;
      let lines = data.split("\n").splice(-10).join("\n");
      print(lines);
    });
  }, */
  curl: (args, done) => {
    request(args[0], (err, response, body) => {
      if (err) throw err;
      done(body);
    });
  },
};
