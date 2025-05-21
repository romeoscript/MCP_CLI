"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
var chalk_1 = require("chalk");
exports.logger = {
    info: function (message) { return console.log(chalk_1.default.blue(message)); },
    success: function (message) { return console.log(chalk_1.default.green(message)); },
    error: function (message) { return console.log(chalk_1.default.red(message)); },
    warning: function (message) { return console.log(chalk_1.default.yellow(message)); },
    header: function (message) { return console.log(chalk_1.default.blue.bold(message)); },
    muted: function (message) { return console.log(chalk_1.default.gray(message)); },
};
