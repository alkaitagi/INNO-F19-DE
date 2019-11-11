export default class base {
    constructor() {
        if (new.target === base) {
            throw new TypeError("Cannot construct abstract instances");
        }
    };
    round(x) {
        for (let i = 0; i < x.length; i++) {
            x[i] = +(Math.round(x[i] + "e+3") + "e-3");
        }
        return x;
    }
    appr = [0];
    erro = [0];
    styling = {};
    createDataset(a) {
        var copy = Object.assign({}, this.styling);
        copy.data = a;
        return copy;
    }
    method(x, y0, h, f) {
        throw new TypeError("Method not implemented");
    };
    /**
    * Calculate dataset for array of x.
    * @param {array} x - x-values array.
    * @param {number} y0 - initial y-value.
    * @param {number} h - x-step.
    * @param {array} exac - exact y-values array.
    * @param {function} deri - y'=f(x,y) derivative function to approximate.
    */
    update(x, y0, h, exac, deri) {
        this.appr = [y0];
        this.erro = [0];

        for (let i = 0; i < x.length; i++) {
            this.appr.push(this.method(x[i], this.appr[i], h, deri));
            this.erro.push(this.appr[i + 1] - exac[i + 1]);
        }

        this.appr = this.round(this.appr);
        this.erro = this.round(this.erro);
    };
    dataset = {};
}
