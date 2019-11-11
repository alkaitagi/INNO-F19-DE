export default class base {
    constructor() {
        if (new.target === base) {
            throw new TypeError("Cannot construct abstract instances");
        }
    };
    /**
    * Evaluate approximation.
    * @param {number} x - x-value.
    * @param {number} y - y-value.
    * @param {number} h - x-step.
    * @param {number} f - f(x,y) function to approximate.
    */
    method(x, y0, h, f) {
        throw new TypeError("Method not implemented");
    };
    /**
    * Calculate dataset for array of x.
    * @param {number} x - x-values array.
    * @param {number} y0 - initial y-value.
    * @param {number} h - x-step.
    * @param {number} f - y'=f(x,y) function to approximate.
    */
    update(x, y0, h, f) {
        let y = [y0];

        for (let i = 0; i < x.length; i++) {
            y.push(this.method(x[i], y[i], h, f));
        }

        this.dataset.data = y;
        return this.dataset;
    };
    dataset = {};
}
