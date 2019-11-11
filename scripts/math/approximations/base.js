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
    * @param {number} derivative - y'(x,y) function to approximate.
    */
    method(x, y, h, derivative) {
        throw new TypeError("Method not implemented");
    };
}