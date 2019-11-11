import base from "./base.js";
import method from "../approximations/runge4.js"

class runge4 extends base {
    constructor() {
        super();
        this.method = method;
        this.dataset = {
            fill: false,
            label: "Runge-Kutta 4nd",
            backgroundColor: "#BF616A",
            borderColor: "#BF616A",
            borderDash: [5, 5],
        }
    }
};

export default new runge4();
