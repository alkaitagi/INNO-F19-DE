import exact from "./graphs/exact/v5.js"
import euler from "./graphs/approximate/euler.js"
import eulerP from "./graphs/approximate/eulerP.js"
import runge4 from "./graphs/approximate/runge4.js"

import { CInput } from "./dataBind.js"

let approximations = [runge4, eulerP, euler];

export function recalculate(x0, y0, X, N) {
    let h = (X - x0) / N;
    let inputs = calculateInputs(x0, h, N);

    exact.update(inputs, y0);
    approximations.forEach(a => a.update(inputs, y0, h, exact.values, exact.equation.derivative));

    CInput.value = exact.constant;
    inputs = exact.round(inputs);
    drawFunctions(inputs);
    drawErrors(inputs);
}

function drawFunctions(xs) {
    if (window.functionChart && window.functionChart !== null) {
        window.functionChart.destroy();
    }

    window.functionChart = new Chart(window.functionCanvas, {
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

function drawErrors(xs) {
    if (window.errorChart && window.errorChart !== null) {
        window.errorChart.destroy();
    }

    window.errorChart = new Chart(window.errorCanvas, {
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
