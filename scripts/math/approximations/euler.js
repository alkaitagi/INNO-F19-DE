import base from "./base.js";

class euler extends base {
    constructor() {
        super();
    };
    method(x, y, h, derivative) {
        return y + h * derivative(x, y);
    };
};

export default new euler();
