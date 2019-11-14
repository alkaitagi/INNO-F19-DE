import base from "./base.js";

export default class baseExact extends base {
    constructor() {
        if (new.target === baseExact) {
            throw new TypeError("Cannot construct abstract instances");
        }
        super();
        this.styling = {
            label: "Exact",
            backgroundColor: "#D8DEE9aa",
            borderColor: "#0000",
        };
        this.equation = {};
        this.constant = 0;
    };
    /**
    * Calculate dataset for array of x.
    * @param {number[]} inputs - x-values array.
    * @param {number} y0 - initial y-value.
    */
    updateValues(inputs, y0) {
        this.values = [];
        for (let i = 0; i < inputs.length; i++) {
            this.values.push(this.equation.function(inputs[i], inputs[0], y0));
        }
        this.values = this.round(this.values);
        this.constant = this.round([this.equation.constant(inputs[0], y0)])[0];
    };
};
