// Named Import

import { add, subtract } from "./mathUtils";

console.log("Addition:", add(10, 5));
console.log("Subtraction:", subtract(10, 5));

import { add as sum } from "./mathUtils";

console.log(sum(20, 10));

import * as MathUtils from "./mathUtils";

console.log(MathUtils.add(5, 5));
console.log(MathUtils.subtract(10, 5));
console.log(MathUtils.PI);


