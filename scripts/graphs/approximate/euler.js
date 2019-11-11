import base from "../baseApproximate.js";
import approximation from "../../math/approximations/euler.js"

class euler extends base {
    constructor() {
        super();
        this.approximation = approximation;
        this.styling = {
            fill: false,
            label: "Euler",
            backgroundColor: "#000",
            borderColor: "#000",
        }
    }
};

export default new euler();
