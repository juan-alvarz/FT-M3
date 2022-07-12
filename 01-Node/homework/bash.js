const commands = require("./commands/index.js");

const done = function (output) {
  process.stdout.write(output + "\nprompt > ");
};
/* const cmd = "date"; */
process.stdout.write("prompt > ");
process.stdin.on("data", function (data) {
  var params = data.toString().trim().split(" ");
  //echo
  let cmd = params.shift();

  if (commands[cmd]) {
    commands[cmd](params, done);
  }
});

/* commands[cmd]();
 */
