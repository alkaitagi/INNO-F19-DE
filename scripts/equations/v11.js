import base from "./base.js";

class v11 extends base {
    constructor() {
        super();
    };
    /**
     * Calcuate derivative y'(x,y).
     * @param {number} x - x-value.
     * @param {number} y - y-value.
     */
    f(x, y) {
        return x * y * (1 - y * y);
    };
    /**
     * Find constant c(x,y).
     * @param {number} x - initial x-value.
     * @param {number} y - initial y-value.
     */
    c(x, y) {
        return Math.log(y / Math.sqrt(1 - y * y)) - x * x / 2;
    };
    /**
     * Calculate exact solution y(x,c).
     * @param {number} x - x-value.
     * @param {number} c - constant.
     */
    y(x, c) {
        let e = Math.exp(x * x + c);
        return Math.sqrt(e / (1 + e));
    };
};

export default new v11();
