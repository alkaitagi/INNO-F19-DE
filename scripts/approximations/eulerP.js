export default {
    name: "Euler improved",
    /**
     * Evaluate approximation.
     * @param {number} x - x-value.
     * @param {number} y - y-value.
     * @param {number} h - x-step.
     * @param {number} f - f(x,y) function to approximate.
     */
    method: (x, y, h, f) => y + h * f(x + h / 2, y + h * f(x, y) / 2)
};
