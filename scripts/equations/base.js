export default class base {
    constructor() {
        if (new.target === base) {
            throw new TypeError("Cannot construct Abstract instances");
        }
    };
    /**
     * Calcuate derivative y'(x,y).
     * @param {number} x - x-value.
     * @param {number} y - y-value.
     */
    f(x, y) {
        throw new TypeError("Method not implemented");
    };
    /**
     * Find constant c(x,y).
     * @param {number} x - initial x-value.
     * @param {number} y - initial y-value.
     */
    c(x, y) {
        throw new TypeError("Method not implemented");
    };
    /**
     * Calculate exact solution y(x,c).
     * @param {number} x - x-value.
     * @param {number} c - constant.
     */
    y(x, c) {
        throw new TypeError("Method not implemented");
    };
};
