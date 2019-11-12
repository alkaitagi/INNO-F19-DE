export default class base {
    /**
    * Returns styled dataset.
    * @param {number[]} inputs - array of values to round to 3 decimals.
    */
    round(inputs) {
        for (let i = 0; i < inputs.length; i++) {
            inputs[i] = +(Math.round(inputs[i] + "e+3") + "e-3");
        }
        return inputs;
    }
    constructor() {
        if (new.target === base) {
            throw new TypeError("Cannot construct abstract instances");
        }
        this.values = [];
        this.styling = {};
    };
    /**
    * Returns styled dataset.
    * @param {number[]} inputs - array of values to insert.
    */
    createDataset(inputs) {
        let copy = Object.assign({}, this.styling);
        copy.data = inputs;
        return copy;
    }
    /**
    * Returns array of x-values.
    * @param {number} x0 - initial x-value.
    * @param {number} X - final x-value.
    * @param {number} N - number of steps.
    */
    calculateInputs(x0, X, N) {
        let inputs = [];
        let h = (X - x0) / N;

        for (let i = 0; i <= N; i++) {
            inputs.push(x0 + i * h);
        }

        return inputs;
    }
}
