import base from "./base.js";

class runge4 extends base {
    constructor() {
        super();
    };
    method(x, y, h, F) {
        const k1 = h * F(x, y);
        const k2 = h * F(x + h / 2, y + k1 / 2);
        const k3 = h * F(x + h / 2, y + k2 / 2);
        const k4 = h * F(x + h, y + k3);
        return y + (k1 + 2 * k2 + 2 * k3 + k4) / 6;
    };
};

export default new runge4();
