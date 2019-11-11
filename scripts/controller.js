import exact from "./graphs/exact/v5.js"
import euler from "./graphs/approximate/euler.js"
import eulerP from "./graphs/approximate/eulerP.js"
import runge4 from "./graphs/approximate/runge4.js"

import { CInput } from "./dataBind.js"

let inputs = [];
let approximations = [runge4, eulerP, euler];

export function recalculate(x0, y0, X, N0, N) {
    inputs = exact.calculateInputs(x0, X, N);

    exact.updateValues(inputs, y0);
    approximations.forEach(function (a) {
        a.updateValues(inputs, y0, exact.equation.derivative);
        a.updateLocalErrors(exact.values);
        a.updateGlobalErrors(x0, y0, exact.equation.derivative, exact.values, X, N0, N);
    });

    CInput.value = exact.constant;
    inputs = exact.round(inputs);

    drawFunctions(inputs);
    drawLocalErrors(inputs);
    drawGlobalErrors(inputs, N0, N);
}

function drawFunctions() {
    if (window.charts.function !== null) {
        window.charts.function.destroy();
    }

    window.charts.function = new Chart(window.canvases.function, {
        type: 'line',
        data: {
            labels: inputs,
            datasets: [
                ...approximations.map(a => a.createDataset(a.values)),
                exact.createDataset(exact.values),
            ],
        },
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
                text: 'Functions',
            },
        },
    });
}

function drawLocalErrors() {
    if (window.charts.localError !== null) {
        window.charts.localError.destroy();
    }

    window.charts.localError = new Chart(window.canvases.localError, {
        type: 'line',
        data: {
            labels: inputs,
            datasets: [
                ...approximations.map(a => a.createDataset(a.localErrors)),
            ],
        },
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
                text: 'Local errors',
            },
        },
    });
}

function drawGlobalErrors() {
    if (window.charts.globalError !== null) {
        window.charts.globalError.destroy();
    }

    window.charts.globalError = new Chart(window.canvases.globalError, {
        type: 'line',
        data: {
            labels: inputs,
            datasets: [
                ...approximations.map(a => a.createDataset(a.globalErrors)),
            ],
        },
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
                text: 'Global errors',
            },
        },
    });
}
