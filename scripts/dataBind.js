import { recalculate } from "./controller.js"

export let CInput = {};

Chart.defaults.global.animation.duration = 200;

document.addEventListener("DOMContentLoaded", () => {
    window.canvases = {};
    window.charts = {
        function: null,
        localError: null,
        globalError: null
    };

    window.canvases.function = document.querySelector("#function canvas").getContext("2d");
    window.canvases.localError = document.querySelector("#localError canvas").getContext("2d");
    window.canvases.globalError = document.querySelector("#globalError canvas").getContext("2d");

    CInput = document.getElementById("C");

    let inputs = [];
    function callback() {
        recalculate(...inputs.map(item => parseFloat(item.value)));
    }

    for (let id of ['x0', 'y0', 'X', 'N0', 'N']) {
        let element = document.getElementById(id);
        inputs.push(element);
        element.addEventListener('input', callback);
    }

    callback();
});
