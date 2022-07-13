const commands = require("./commands");

// function Done para refactorear el prompt
const done = function (output) {
  process.stdout.write(output + "\nprompt > ");
};

process.stdout.write("prompt > ");
process.stdin.on("data", function (data) {
  var params = data.toString().trim().split(" ");
  let cmd = params.shift();
  if (commands[cmd]) {
    // commands[cmd]([],fn)
    commands[cmd](params, done);
  }
});

/* commands[cmd]();
 */
