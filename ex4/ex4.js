"use strict";
exports.__esModule = true;
exports.findNb = void 0;
function findNb(m) {
    return (-1 + Math.sqrt(Math.pow(1, 2) - 4 * 1 * -(Math.sqrt(m) * 2))) / (2 * 1) % 1 === 0 ? (-1 + Math.sqrt(Math.pow(1, 2) - 4 * 1 * -(Math.sqrt(m) * 2))) / (2 * 1) : -1;
}
exports.findNb = findNb;
console.log(findNb(1071225));
