import base from "./base.js";

class v11 extends base {
    constructor() {
        super();
    };
    derivative(x, y) {
        return x * y * (1 - y * y);
    };
    constant(x0, y0) {
        return Math.exp(x0 * x0) * (1 / (y0 * y0) - 1);
    };
    function(x, x0, y0) {
        let e = Math.exp(x * x);
        return Math.sign(y0) * Math.sqrt(e / (this.constant(x0, y0) + e));
    };
};

export default new v11();
