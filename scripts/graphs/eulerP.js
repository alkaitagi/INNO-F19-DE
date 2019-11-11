import base from "./base.js";
import method from "../approximations/eulerP.js"

class eulerP extends base {
    constructor() {
        super();
        this.method = method;
        this.dataset = {
            fill: false,
            label: "Euler improved",
            backgroundColor: "#A3BE8C",
            borderColor: "#A3BE8C",
        }
    }
};

export default new eulerP();
