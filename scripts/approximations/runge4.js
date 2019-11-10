export default {
    name: "Runge-Kutta 4th",
    /**
     * Evaluate approximation.
     * @param {number} x - x-value.
     * @param {number} y - y-value.
     * @param {number} h - x-step.
     * @param {number} f - f(x,y) function to approximate.
     */
    method(x, y, h, f) {
        let k1 = h * f(x, y);
        let k2 = h * f(x + h / 2, y + k1 / 2);
        let k3 = h * f(x + h / 2, y + k2 / 2);
        let k4 = h * f(x + h, y + k3);
        return y + (k1 + 2 * k2 + 2 * k3 + k4) / 6;
    }
};

