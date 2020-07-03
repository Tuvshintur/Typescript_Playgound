"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
var Sorter = /** @class */ (function () {
    function Sorter() {
    }
    Sorter.prototype.sort = function () {
        var length = this.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                if (this.compare(j, j + 1)) {
                    this.swap(j, j + 1);
                }
                //Its called Type Guard
                // if (this.collection instanceof Array) {
                //TS is strong enough collection === number[] ?? checked it
                // }
                //~~~for the string
                // if (typeof this.collection === 'string') {
                // }
            }
        }
    };
    return Sorter;
}());
exports.Sorter = Sorter;
