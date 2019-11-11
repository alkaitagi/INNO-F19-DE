import base from "./base.js";
import method from "../approximations/euler.js"

class euler extends base {
    constructor() {
        super();
        this.method = method;
        this.dataset = {
            fill: false,
            label: "Euler",
            backgroundColor: "#000",
            borderColor: "#000",
        }
    }
};

export default new euler();
