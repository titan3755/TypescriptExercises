"use strict";
exports.__esModule = true;
exports.Kata = void 0;
var Kata = /** @class */ (function () {
    function Kata() {
    }
    Kata.highAndLow = function (numbers) {
        var numberList = [];
        var highestNumber = -(Number.MAX_VALUE);
        var lowestNumber = Number.MAX_VALUE;
        numbers.split(' ').forEach(function (value) {
            numberList.push(parseInt(value));
        });
        if (numberList.every(function (v) { return v === numberList[0]; })) {
            lowestNumber = highestNumber = numberList[0];
        }
        else {
            numberList.forEach(function (value) {
                if (highestNumber < value) {
                    highestNumber = value;
                }
                if (lowestNumber > value) {
                    lowestNumber = value;
                }
            });
        }
        return "".concat(highestNumber, " ").concat(lowestNumber);
    };
    return Kata;
}());
exports.Kata = Kata;
console.log(Kata.highAndLow("-2994 -3032 -666 -3764 84673 67723 -847 746 874 -7237"));
