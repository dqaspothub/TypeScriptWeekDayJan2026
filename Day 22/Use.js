"use strict";
// Named Import
Object.defineProperty(exports, "__esModule", { value: true });
var mathUtils_1 = require("./mathUtils");
console.log("Addition:", (0, mathUtils_1.add)(10, 5));
console.log("Subtraction:", (0, mathUtils_1.subtract)(10, 5));
var mathUtils_2 = require("./mathUtils");
console.log((0, mathUtils_2.add)(20, 10));
var MathUtils = require("./mathUtils");
console.log(MathUtils.add(5, 5));
console.log(MathUtils.subtract(10, 5));
