import exact from "./graphs/exact/v5.js"
import euler from "./graphs/approximate/euler.js"
import eulerP from "./graphs/approximate/eulerP.js"
import runge4 from "./graphs/approximate/runge4.js"

import { CInput } from "./dataBind.js"

let approximations = [runge4, eulerP, euler];

/**
 * Returns array of x-values.
 * @param {number} x0 initial x-value.
 * @param {number} h evaluation step.
 * @param {number} N number of steps.
 */
function calculateInputs(x0, h, N) {
    let inputs = [];

    for (let i = 0; i <= N; i++) {
        inputs.push(x0 + i * h);
    }

    return inputs;
}

export function recalculate(x0, y0, X, N0, N) {
    let h = (X - x0) / N;
    let inputs = calculateInputs(x0, h, N);

    exact.update(inputs, y0);
    approximations.forEach(a => a.update(inputs, y0, h, exact.values, exact.equation.derivative));

    CInput.value = exact.constant;
    inputs = exact.round(inputs);
    drawFunctions(inputs);
    drawLocalErrors(inputs);
}

function drawFunctions(xs) {
    if (window.charts.function && window.charts.function !== null) {
        window.charts.function.destroy();
    }

    window.charts.function = new Chart(window.canvases.function, {
        type: 'line',
        data: {
            labels: xs,
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
                text: 'Approximations',
            },
        }
    });
}

function drawLocalErrors(xs) {
    if (window.charts.localError && window.charts.localError !== null) {
        window.charts.localError.destroy();
    }

    window.charts.localError = new Chart(window.canvases.localError, {
        type: 'line',
        data: {
            labels: xs,
            datasets: [
                ...approximations.map(a => a.createDataset(a.errors)),
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
                text: 'Errors',
            },
        }
    });
}
