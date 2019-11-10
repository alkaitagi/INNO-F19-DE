import { recalculate } from "./controller.js"

let items = [];

Chart.defaults.global.animation.duration = 200;

document.addEventListener("DOMContentLoaded", () => {
    canvas = document.querySelector("#graph canvas").getContext("2d");

    function collectData() {
        recalculate(...items.map(item => parseFloat(item.value)));
    }

    for (let id of ['x0', 'y0', 'X', 'N']) {
        items.push({
            id,
            element: document.getElementById(id),
        });
        input.addEventListener('input', collectData);
    }
});
