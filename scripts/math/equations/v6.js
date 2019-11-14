import base from "./base.js";

class v6 extends base {
    constructor() {
        super();
    };
    derivative(x, y) {
        return 2 * x * (x ** 2 + y);
    };
    constant(x0, y0) {
        const x02 = x0 ** 2;
        return (y0 + x02 + 1) / Math.exp(x02);
    };
    function(x, x0, y0) {
        const x2 = x ** 2;
        return this.constant(x0, y0) * Math.exp(x2) - x2 - 1;
    };
};

export default new v6();
