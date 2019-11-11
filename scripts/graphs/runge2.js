import base from "./base.js";
import approximation from "../approximations/runge2.js"

class runge2 extends base {
    constructor() {
        super();
        this.method = approximation.method;
        this.styling = {
            fill: false,
            label: "Runge-Kutta 2nd",
            backgroundColor: "#BF616A",
            borderColor: "#BF616A",
            borderDash: [5, 10],
        }
    }
};

export default new runge2();
