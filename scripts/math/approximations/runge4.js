import base from "./base.js";

class runge4 extends base {
    constructor() {
        super();
    };
    method(x, y, h, derivative) {
        let k1 = h * derivative(x, y);
        let k2 = h * derivative(x + h / 2, y + k1 / 2);
        let k3 = h * derivative(x + h / 2, y + k2 / 2);
        let k4 = h * derivative(x + h, y + k3);
        return y + (k1 + 2 * k2 + 2 * k3 + k4) / 6;
    };
};

export default new runge4();
