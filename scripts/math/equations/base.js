export default class base {
    constructor() {
        if (new.target === base) {
            throw new TypeError("Cannot construct abstract instances");
        }
    };
    /**
     * Calcuate derivative y'(x,y).
     * @param {number} x - x-value.
     * @param {number} y - y-value.
     */
    derivative(x, y) {
        throw new TypeError("Method not implemented");
    };
    /**
     * Find constant c(x0,y0).
     * @param {number} x0 - initial x-value.
     * @param {number} y0 - initial y-value.
     */
    constant(x0, y0) {
        throw new TypeError("Method not implemented");
    };
    /**
     * Calculate function y(x,x0,y0).
     * @param {number} x - x-value.
     * @param {number} x0 - initial x-value.
     * @param {number} y0 - initial y-value.
     */
    function(x, x0, y0) {
        throw new TypeError("Method not implemented");
    };
};
