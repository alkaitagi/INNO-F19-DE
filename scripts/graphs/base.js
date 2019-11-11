export default class base {
    round(x) {
        for (let i = 0; i < x.length; i++) {
            x[i] = +(Math.round(x[i] + "e+3") + "e-3");
        }
        return x;
    }
    constructor() {
        if (new.target === base) {
            throw new TypeError("Cannot construct abstract instances");
        }
        this.values = [];
        this.styling = {};
    };
    createDataset(values) {
        let copy = Object.assign({}, this.styling);
        copy.data = values;
        return copy;
    }
}
