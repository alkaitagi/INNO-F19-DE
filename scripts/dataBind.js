import { recalculate } from "./controller.js"

Chart.defaults.global.animation.duration = 200;

document.addEventListener("DOMContentLoaded", () => {
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
