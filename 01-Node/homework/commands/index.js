var fs = require("fs");
var request = require("request");

console.log(fs);
module.exports = {
  date: function (params, done) {
    done(Date());
  },

  pwd: function (params, done) {
    done(process.env.PWD);
  },

  echo: function (params, done) {
    done(params.join(" "));
  },
  ls: function (params, done) {
    fs.readdir(".", function (err, files) {
      if (err) throw err;
      var output = "";
      files.forEach((f) => {
        output = output + f + " \n ";
      });
      done(output);
    });
  },
  cat: function (arg, print) {
    fs.readFile(arg[0], "uft8", function (err, data) {
      if (err) throw err;
      print(data);
    });
  },

  head: function (params, print) {
    fs.readFile(params[0], "utf8", function (err, data) {
      if (err) throw err;
      let lines = data.split("\n").splice(0, 10).join("\n");
      print(lines);
    });
  },

  tail: function (params, print) {
    fs.readFile(params[0], "utf8", function (err, data) {
      if (err) throw err;
      let lines = data.split("\n").splice(-10).join("\n");
      print(lines);
    });
  },

  curl: function (args, print) {
    request(args[0], function (err, data) {
      if (err) throw err;
    });
  },
};
