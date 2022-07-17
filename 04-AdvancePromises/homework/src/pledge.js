"use strict";

const {
  captureRejectionSymbol,
} = require("@11ty/eleventy/src/Util/AsyncEventEmitter");

/*----------------------------------------------------------------
Promises Workshop: construye la libreria de ES6 promises, pledge.js
----------------------------------------------------------------*/
// // TU CÓDIGO AQUÍ:
/* class $Promise {
  constructor(executor) {
    this.executor = executor;
    this._state = { status: "pending", value: null };
    this.executor(res, rej);
  }
} */
function $Promise(executor) {
  if (typeof executor !== "function")
    throw new TypeError("executor must be a function");

  // estado inicial
  this._state = "pending";
  this._handlerGroups = [];

  executor(this._internalResolve.bind(this), this._internalReject.bind(this));
}

//resolve
$Promise.prototype._internalResolve = function (data) {
  if (this._state === "pending") {
    this._state = "fulfilled";
    this._value = data;

    this.callHandlers();
  }
};

//rejected
$Promise.prototype._internalReject = function (reason) {
  if (this._state === "pending") {
    this._state = "rejected";
    this._value = reason;
  }
};

$Promise.prototype.then = function (succesCb, errorCb) {
  let handlers = {
    succesCb: typeof succesCb === "function" && succesCb,
    errorCb: typeof errorCb === "function" && errorCb,
  };
  this._handlerGroups.push(handlers);

  if (this._state !== "pending") this._callHandlers();
};

$Promise.prototype._callHandlers = function () {
  while (this._handlerGroups.length) {
    const currentHandler = this._handlerGroups.shift();
    //this._handlerGroups = [{succesCb, errorCb},...]
    //currentHandler = {succesCb, errorCb}

    if (this._state === "fulfilled") {
      currentHandler.succesCb && currentHandler.succesCb(this._value);
    } else if (this._state === "rejected") {
      currentHandler.errorCb && currentHandler.errorCb(this._value);
    }
  }
};

//catch es un then pero que solo maneja error handler
$Promise.prototype.catch = function (errorHandler) {
  this.then(null, errorHandler);
};

module.exports = $Promise;
/*-------------------------------------------------------
El spec fue diseñado para funcionar con Test'Em, por lo tanto no necesitamos
realmente usar module.exports. Pero aquí está para referencia:

module.exports = $Promise;

Entonces en proyectos Node podemos esribir cosas como estas:

var Promise = require('pledge');
…
var promise = new Promise(function (resolve, reject) { … });
--------------------------------------------------------*/
