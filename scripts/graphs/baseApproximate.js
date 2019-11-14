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
        const values = [y0];
        const h = inputs[1] - inputs[0];

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
        this.localErrors = [0];
        for (let i = 1; i <= exacts.length; i++) {
            this.localErrors.push(Math.abs(this.values[i] - exacts[i]));
        }
        this.localErrors = this.round(this.localErrors);
    }
    /**
    * Calculate dataset for array of x.
    * @param {number} x0 - initial x-values.
    * @param {number} y0 - initial y-value.
    * @param {function} F - f(x,y) function to approximate.
    * @param {number} X - final x-values.
    * @param {number} Y - final y-value.
    * @param {number} N0 - initial step index.
    * @param {number} N - final step index.
    */
    updateGlobalErrors(x0, y0, F, X, Y, N0, N) {
        this.globalErrors = [];
        for (let i = N0; i <= N; i++) {
            this.globalErrors.push(Math.abs(
                this._calculateValues(this.calculateInputs(x0, X, i), y0, F)
                    .slice(-1)[0] - Y
            ));
        }
        this.globalErrors = this.round(this.globalErrors);
    }
};
