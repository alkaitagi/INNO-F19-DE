import base from "./base.js";
import approximation from "../approximations/eulerP.js"

class eulerP extends base {
    constructor() {
        super();
        this.method = approximation.method;
        this.styling = {
            fill: false,
            label: "Euler improved",
            backgroundColor: "#A3BE8C",
            borderColor: "#A3BE8C",
        }
    }
};

export default new eulerP();
