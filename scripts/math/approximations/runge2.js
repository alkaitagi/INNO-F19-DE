import base from "./base.js";

class runge2 extends base {
    constructor() {
        super();
    };
    method(x, y, h, F) {
        let k1 = h * F(x, y);
        let k2 = h * F(x + h, y + k1);
        return y + (k1 + k2) / 2;
    };
};

export default new runge2();
