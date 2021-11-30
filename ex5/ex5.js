"use strict";
exports.__esModule = true;
exports.isTriangle = void 0;
function isTriangle(a, b, c) {
    if (a + b > c && b + c > a && a + c > b) {
        return true;
    }
    else {
        return false;
    }
}
exports.isTriangle = isTriangle;
