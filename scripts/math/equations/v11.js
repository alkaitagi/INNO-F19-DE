import base from "./base.js";

class v11 extends base {
    constructor() {
        super();
    };
    derivative(x, y) {
        return x * y * (1 - y ** 2);
    };
    constant(x0, y0) {
        return Math.exp(x0 ** 2) * (1 / (y0 ** 2) - 1);
    };
    function(x, x0, y0) {
        const e = Math.exp(x ** 2);
        return Math.sign(y0) * Math.sqrt(e / (this.constant(x0, y0) + e));
    };
};

export default new v11();
