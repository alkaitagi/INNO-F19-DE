import base from "../baseApproximate.js";
import approximation from "../../math/approximations/euler.js"

class euler extends base {
    constructor() {
        super();
        this.approximation = approximation;
        this.styling = {
            fill: false,
            label: "Euler",
            backgroundColor: "#EBCB8B",
            borderColor: "#EBCB8B",
        }
    }
};

export default new euler();
