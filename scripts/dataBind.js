import { recalculate } from "./controller.js"

export let CInput = {};

Chart.defaults.global.animation.duration = 200;

document.addEventListener("DOMContentLoaded", () => {
    window.functionCanvas = document.querySelector("#function canvas").getContext("2d");
    window.errorCanvas = document.querySelector("#error canvas").getContext("2d");

    CInput = document.getElementById("C");

    let inputs = [];
    function callback() {
        recalculate(...inputs.map(item => parseFloat(item.value)));
    }

    for (let id of ['x0', 'y0', 'X', 'N']) {
        let element = document.getElementById(id);
        inputs.push(element);
        element.addEventListener('input', callback);
    }

    callback();
});
