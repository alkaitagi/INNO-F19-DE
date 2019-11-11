import base from "./base.js";

class runge2 extends base {
    constructor() {
        super();
    };
    method(x, y, h, derivative) {
        let k1 = h * derivative(x, y);
        let k2 = h * derivative(x + h, y + k1);
        return y + (k1 + k2) / 2;
    };
};

export default new runge2();
