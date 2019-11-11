import base from "./base.js";

export default class baseApproximate extends base {
    constructor() {
        if (new.target === baseApproximate) {
            throw new TypeError("Cannot construct abstract instances");
        }
        super();
        this.approximation = {};
        this.errors = [];
    }
    /**
    * Calculate dataset for array of x.
    * @param {array} inputs - x-values array.
    * @param {number} y0 - initial y-value.
    * @param {number} h - x-step.
    * @param {array} exacts - exact y-values array.
    * @param {function} derivative - y'=f(x,y) derivative function to approximate.
    */
    update(inputs, y0, h, exacts, derivative) {
        let values = [y0];
        let errors = [0];

        for (let i = 0; i < inputs.length; i++) {
            values.push(this.approximation.method(inputs[i], values[i], h, derivative));
            errors.push(Math.abs(values[i + 1] - exacts[i + 1]));
        }

        this.values = this.round(values);
        this.errors = this.round(errors);
    };
};
