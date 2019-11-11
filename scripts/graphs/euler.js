import base from "./base.js";
import approximation from "../approximations/euler.js"

class euler extends base {
    constructor() {
        super();
        this.method = approximation.method;
        this.styling = {
            fill: false,
            label: "Euler",
            backgroundColor: "#000",
            borderColor: "#000",
        }
    }
};

export default new euler();
