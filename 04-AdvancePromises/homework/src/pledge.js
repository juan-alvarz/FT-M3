"use strict";
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
executor = (res, rej) => {
  console.log("Hola Mundo!");
};

function $Promise(executor) {
  if (typeof executor !== "function") {
    throw new TypeError("executor must be a function");
  }
  //constructor
  this._state = "pending";
  this._value = undefined;
  this._handleGroups = [];

  //executor((data) => this._internalResolve(data), (reason) => this._internalReject(reason)
  executor(this._internalResolve.bind(this), this._internalReject.bind(this));
}

$Promise.prototype._internalResolve = (data) => {
  if (this._state === "pending") {
    this._state = "fulfilled";
    this._value = data;
  }
};
$Promise.prototype._internalReject = (reason) => {
  if (this._state === "pending") {
    this._state = "rejected";
    this._value = reason;
  }
};

$Promise.prototype.then = function (succesCb, errorCb) {
  this._handleGroups.push({ succesCb, errorCb });
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
