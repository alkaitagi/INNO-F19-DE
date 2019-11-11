import base from "./base.js";

class euler extends base {
    constructor() {
        super();
    };
    method(x, y, h, f) {
        return y + h * f(x, y);
    };
};

export default new euler();
