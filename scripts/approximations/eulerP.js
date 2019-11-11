import base from "./base.js";

class eulerP extends base {
    constructor() {
        super();
    };
    method(x, y, h, f) {
        return y + h * f(x + h / 2, y + h * f(x, y) / 2);
    };
};

export default new eulerP();
