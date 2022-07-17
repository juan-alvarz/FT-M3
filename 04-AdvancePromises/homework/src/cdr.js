const { map } = require("@11ty/eleventy/src/TemplateGlob");
const { default: toBootstrapNav } = require("eleventy-navigation-bootstrap");

function $Promise(executor) {
  if (typeof executor !== "function") {
    throw new TypeError("executor must be function");
  }
  this._state = "pending";
  this._handlerGroups = [];

  //executor function
  executor(this._internalResolve.bind(this), this._internalReject.bind(this));
}

$Promise.prototype._internalResolve = function (data) {
  if (this._state === "pending") {
    this._state = "fulfilled";
    this._value = data;
    this._callHandlers();
  }
};

$Promise.prototype._internalReject = function (reason) {
  if (this._state === "pending") {
    this._state = "rejected";
    this._value = reason;
    this._callHandlers();
  }
};

$Promise.prototype.then = function (succesCb, errorCb) {
  if (typeof succesCb !== "function") succesCb = false;
  if (typeof errorCb !== "function") errorCb = false;
  this._handlerGroups.push({ succesCb, errorCb });
  if (this._state !== "pending") this._callHandlers();
};

$Promise.prototype._callHandlers = function () {
  while (this._handlerGroups.length > 0) {
    //cola => shift
    let actual = this._handlerGroups.shift();
    if (this._state === "fulfilled") {
      actual.succesCb && actual.succesCb(this._value);
    } else {
      actual.errorCb && actual.errorCb(this._value);
    }
  }
};

$Promise.prototype.catch = function(){
  return this.then(null, errorCb)
}
