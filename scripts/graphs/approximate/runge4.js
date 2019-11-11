import base from "../baseApproximate.js";
import approximation from "../../math/approximations/runge4.js"

class runge4 extends base {
    constructor() {
        super();
        this.approximation = approximation;
        this.styling = {
            fill: false,
            label: "Runge-Kutta 4nd",
            backgroundColor: "#BF616A",
            borderColor: "#BF616A",
            borderDash: [5, 5],
        }
    }
};

export default new runge4();
