import base from "./base.js";

export default class baseApproximate extends base {
    constructor() {
        if (new.target === baseApproximate) {
            throw new TypeError("Cannot construct abstract instances");
        }
        super();
        this.approximation = {};
        this.localErrors = [];
        this.globalErrors = [];
    }
    /**
    * Calculate dataset for array of x.
    * @param {number[]} inputs - x-values array.
    * @param {number} y0 - initial y-value.
    * @param {number} h - x-step.
    * @param {function} derivative - y'=f(x,y) derivative function to approximate.
    */
    updateValues(inputs, y0, h, derivative) {
        let values = [y0];

        for (let i = 0; i < inputs.length; i++) {
            values.push(this.approximation.method(inputs[i], values[i], h, derivative));
        }

        this.values = this.round(values);
    };

    updateErrors(exacts, N0, N) {
        let localErrors = [0];

        for (let i = 0; i < exacts.length; i++) {
            localErrors.push(Math.abs(this.values[i + 1] - exacts[i + 1]));
        }

        this.localErrors = this.round(localErrors);
    }
};
