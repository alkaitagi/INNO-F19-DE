import base from "./base.js";

export default class exact extends base {
    constructor(equation) {
        super();
        this.dataset = {
            label: "Exact",
            backgroundColor: "#D8DEE9",
            borderColor: "#0000",
        };
        this.equation = equation;
    };
    /**
    * Evaluate function.
    * @param {number} x - initial x-value.
    * @param {number} c - particular constant.
    */
    method(x, c) {
        return this.equation.y(x, c);
    };
    /**
    * Calculate dataset for array of x.
    * @param {number} x - x-values array.
    * @param {number} y0 - initial y-value.
    */
    update(x, y0) {
        let y = [y0];
        let c = this.equation.c(x[0], y0);

        for (let i = 0; i < x.length; i++) {
            y.push(this.method(x[i], c));
        }

        this.dataset.data = y;
        return this.dataset;
    };
};
