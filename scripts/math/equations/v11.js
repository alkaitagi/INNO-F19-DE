import base from "./base.js";

class v11 extends base {
    constructor() {
        super();
    };
    derivative(x, y) {
        return x * y * (1 - y * y);
    };
    constant(x0, y0) {
        return Math.log(y0 / Math.sqrt(1 - y0 * y0)) - x0 * x0 / 2;
    };
    function(x, x0, y0) {
        let e = Math.exp(x * x + this.constant(x0, y0));
        return Math.sign(y0) * Math.sqrt(e / (1 + e));
    };
};

export default new v11();
