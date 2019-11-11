import base from "./base.js";

class v5 extends base {
    constructor() {
        super();
    };
    deri(x, y) {
        return x * y * (1 - y * y);
    };
    cons(x, y) {
        return Math.log(y / Math.sqrt(1 - y * y)) - x * x / 2;
    };
    func(x, c) {
        let e = Math.exp(x * x + c);
        return Math.sqrt(e / (1 + e));
    };
};

export default new v5();
