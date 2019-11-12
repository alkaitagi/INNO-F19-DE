import base from "./base.js";

class euler extends base {
    constructor() {
        super();
    };
    method(x, y, h, F) {
        return y + h * F(x, y);
    };
};

export default new euler();
