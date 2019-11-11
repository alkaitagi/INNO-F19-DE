import base from "./base.js";

export default class exact extends base {
    constructor(equation) {
        super();
        this.dataset = {
            label: "Exact",
            backgroundColor: "#D8DEE9",
            borderColor: "#0000",
        };
        this.equation = equation;
    };
    update(x, y0) {
        let y = [y0];
        let cv = this.equation.c(x[0], y0);

        for (let i = 0; i < x.length; i++) {
            y.push(this.equation.y(x[i], cv));
        }

        this.dataset.data = y;
        return this.dataset;
    }
};


