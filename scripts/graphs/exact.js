import base from "./base.js";

class exact extends base {
    constructor() {
        super();
        this.styling = {
            label: "Exact",
            backgroundColor: "#D8DEE9",
            borderColor: "#0000",
        };
    };
    exac = [0];
    cons = 0;
    /**
    * Calculate dataset for array of x.
    * @param {number} x - x-values array.
    * @param {number} y0 - initial y-value.
    * @param {object} equation - equation instance.
    */
    update(x, y0, cons, func) {
        this.exac = [y0];
        this.cons = this.round([cons(x[0], y0)])[0];

        for (let i = 0; i < x.length; i++) {
            this.exac.push(func(x[i], this.cons));
        }

        this.exac = this.round(this.exac);
    };
};

export default new exact();
