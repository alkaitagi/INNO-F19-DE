import base from "./base.js";

class eulerP extends base {
    constructor() {
        super();
    };
    method(x, y, h, F) {
        return y + h * F(x + h / 2, y + h * F(x, y) / 2);
    };
};

export default new eulerP();
