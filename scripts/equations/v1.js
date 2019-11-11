import base from "./base.js";

class v1 extends base {
    constructor() {
        super();
    };
    deriv(x, y) {
        return 1 + 2 * y / x;
    };
    const(x, y) {
        //return Math.log(y / Math.sqrt(1 - y * y)) - x * x / 2;
    };
    funct(x, c) {
        //let e = Math.exp(x * x + c);
        //return Math.sqrt(e / (1 + e));
    };
};

export default new v1();
