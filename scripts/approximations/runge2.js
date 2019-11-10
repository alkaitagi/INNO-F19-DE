export default {
    name: "Runge-Kutta 2th",
    /**
     * Evaluate approximation.
     * @param {number} x - x-value.
     * @param {number} y - y-value.
     * @param {number} h - x-step.
     * @param {number} f - f(x,y) function to approximate.
     */
    method: (x, y, h, f) => {
        let k1 = h * f(x, y);
        let k2 = h * f(x + h, y + k1);
        return y + (k1 + k2) / 2;
    }
};
