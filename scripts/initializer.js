import { recalculate } from "./controller.js"

document.addEventListener("DOMContentLoaded", initialize);

function initialize() {
    initCharts();
    initInputs();
}

function initCharts() {
    Chart.defaults.global.animation.duration = 200;
    const charts = new Map(
        [
            ["function", "Functions"],
            ["localError", "Local errors"],
            ["globalError", "Global errors"],
        ]
    );

    window.charts = {};
    for (const [id, title] of charts) {
        window.charts[id] = new Chart(document.querySelector(`#${id} canvas`).getContext("2d"), {
            type: 'line',
            options: {
                responsive: true,
                maintainAspectRatio: false,
                elements: {
                    point: {
                        radius: 0
                    }
                },
                tooltips: {
                    mode: 'index',
                    intersect: false,
                },
                hover: {
                    mode: 'nearest',
                    intersect: true
                },
                title: {
                    display: true,
                    text: title,
                },
            },
        });
    }
}

function initInputs() {
    window.CInput = document.getElementById("C");

    const inputs = [];
    const callback = () => recalculate(...inputs.map(item => parseFloat(item.value)));

    for (const id of ['x0', 'y0', 'X', 'N0', 'N']) {
        const element = document.getElementById(id);
        inputs.push(element);
        element.addEventListener('input', callback);
    }

    callback();
}
