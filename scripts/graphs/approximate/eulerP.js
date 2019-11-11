import base from "../baseApproximate.js";
import approximation from "../../math/approximations/eulerP.js"

class eulerP extends base {
    constructor() {
        super();
        this.approximation = approximation;
        this.styling = {
            fill: false,
            label: "Euler improved",
            backgroundColor: "#A3BE8C",
            borderColor: "#A3BE8C",
        }
    }
};

export default new eulerP();
