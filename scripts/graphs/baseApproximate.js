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
    * @param {function} F - f(x,y) function to approximate.
    * @private
    */
    _calculateValues(inputs, y0, F) {
        let values = [y0];
        let h = inputs[1] - inputs[0];

        for (let i = 0; i < inputs.length - 1; i++) {
            values.push(this.approximation.method(inputs[i], values[i], h, F));
        }

        return values;
    }
    /**
    * Calculate dataset for array of x.
    * @param {number[]} inputs - x-values array.
    * @param {number} y0 - initial y-value.
    * @param {function} F - f(x,y) function to approximate.
    */
    updateValues(inputs, y0, F) {
        this.values = this.round(this._calculateValues(inputs, y0, F));
    };
    /**
    * Calculate dataset for array of x.
    * @param {number[]} exacts - exact x-values array.
    */
    updateLocalErrors(exacts) {
        let localErrors = [0];

        for (let i = 0; i < exacts.length; i++) {
            localErrors.push(Math.abs(this.values[i + 1] - exacts[i + 1]));
        }
        this.localErrors = this.round(localErrors);
    }
    /**
    * Calculate dataset for array of x.
    * @param {number} x0 - initial x-values.
    * @param {number} y0 - initial y-value.
    * @param {function} F - f(x,y) function to approximate.
    * @param {number} Y - final y-value.
    * @param {number} X - final x-values.
    * @param {number} N0 - initial step index.
    * @param {number} N - final step index.
    */
    updateGlobalErrors(x0, y0, F, X, Y, N0, N) {
        let globalErrors = [];

        for (let i = N0; i <= N; i++) {
            let values = this._calculateValues(this.calculateInputs(x0, X, i), y0, F);
            globalErrors.push(Math.abs(values[values.length - 1] - Y));
        }

        this.globalErrors = this.round(globalErrors);
    }
};
