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
    * @param {function} derivative - y'=f(x,y) derivative function to approximate.
    */
    calculateValues(inputs, y0, derivative) {
        let values = [y0];
        let h = inputs[1] - inputs[0];

        for (let i = 0; i < inputs.length - 1; i++) {
            values.push(this.approximation.method(inputs[i], values[i], h, derivative));
        }

        return values;
    }
    /**
    * Calculate dataset for array of x.
    * @param {number[]} inputs - x-values array.
    * @param {number} y0 - initial y-value.
    * @param {function} derivative - y'=f(x,y) derivative function to approximate.
    */
    updateValues(inputs, y0, derivative) {
        this.values = this.round(this.calculateValues(inputs, y0, derivative));
    };
    /**
    * Calculate dataset for array of x.
    * @param {number[]} exacts - exact x-values array.
    */
    updateLocalErrors(exacts) {
        let localErrors = [];

        for (let i = 0; i < exacts.length; i++) {
            localErrors.push(Math.abs(this.values[i + 1] - exacts[i + 1]));
        }
        this.localErrors = this.round(localErrors);
    }
    /**
    * Calculate dataset for array of x.
    * @param {number} x0 - initial x-values.
    * @param {number} y0 - initial y-value.
    * @param {function} derivative - y'=f(x,y) derivative function to approximate.
    * @param {number[]} exacts - exact x-values array.
    * @param {number} X - final x-values.
    * @param {number} N0 - initial step index.
    * @param {number} N - final step index.
    */
    updateGlobalErrors(x0, y0, derivative, exacts, X, N0, N) {
        let globalErrors = [];

        for (let i = N0; i <= N; i++) {
            let values = this.calculateValues(
                this.calculateInputs(x0, X, i),
                y0,
                derivative
            );
            globalErrors.push(Math.abs(values[values.length - 1] - exacts[exacts.length - 1]));
        }

        this.globalErrors = this.round(globalErrors);
    }
};
