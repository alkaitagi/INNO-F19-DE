import base from "./base.js";

class exact extends base {
    constructor() {
        super();
        this.dataset = {
            label: "Exact",
            backgroundColor: "#D8DEE9",
            borderColor: "#0000",
        };
    };
    /**
    * Calculate dataset for array of x.
    * @param {number} x - x-values array.
    * @param {number} y0 - initial y-value.
    */
    update(x, y0, equation) {
        let y = [y0];
        let c = equation.c(x[0], y0);

        for (let i = 0; i < x.length; i++) {
            y.push(equation.y(x[i], c));
        }

        this.dataset.data = y;
        return this.dataset;
    };
};

export default new exact();
