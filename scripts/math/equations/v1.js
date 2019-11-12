import base from "./base.js";

class v1 extends base {
    constructor() {
        super();
    };
    derivative(x, y) {
        return 1 + 2 * y / x;
    };
    constant(x0, y0) {
        return (y0 + x0) / (x0 ** 2);
    };
    function(x, x0, y0) {
        return this.constant(x0, y0) * (x ** 2) - x;
    };
};

export default new v1();
