import base from "./base.js";

class v5 extends base {
    constructor() {
        super();
    };
    derivative(x, y) {
        return 2 * x * (x * x + y);
    };
    constant(x0, y0) {
        return (y0 + x0 * x0 + 1) / Math.exp(x0 * x0);
    };
    function(x, x0, y0) {
        return this.constant(x0, y0) * Math.exp(x * x) - x * x - 1;
    };
};

export default new v5();
