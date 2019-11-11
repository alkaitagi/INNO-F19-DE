import base from "./base.js";

class eulerP extends base {
    constructor() {
        super();
    };
    method(x, y, h, derivative) {
        return y + h * derivative(x + h / 2, y + h * derivative(x, y) / 2);
    };
};

export default new eulerP();
