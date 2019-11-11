import base from "./base.js";

export default class baseExact extends base {
    constructor() {
        if (new.target === baseExact) {
            throw new TypeError("Cannot construct abstract instances");
        }
        super();
        this.styling = {
            label: "Exact",
            backgroundColor: "#D8DEE9",
            borderColor: "#0000",
        };
        this.equation = {};
        this.constant = 0;
    };
    /**
    * Calculate dataset for array of x.
    * @param {number} inputs - x-values array.
    * @param {number} y0 - initial y-value.
    */
    update(inputs, y0) {
        let values = [];
        let constant = this.equation.constant(inputs[0], y0);

        for (let i = 0; i < inputs.length; i++) {
            values.push(this.equation.function(inputs[i], inputs[0], y0));
        }

        this.values = this.round(values);
        this.constant = this.round([constant])[0];
    };
};
