import equation from "./equations/v11.js"
import exact from "./graphs/exact.js"
import euler from "./graphs/euler.js"
import eulerP from "./graphs/eulerP.js"
import runge2 from "./graphs/runge2.js"
import runge4 from "./graphs/runge4.js"
import { CInput } from "./dataBind.js"

export function recalculate(x0, y0, X, N) {
    let h = (X - x0) / N;
    let xs = getXs(x0, h, N);

    exact.update(xs, y0, equation.cons, equation.func);
    runge4.update(xs, y0, h, exact.exac, equation.deri);
    eulerP.update(xs, y0, h, exact.exac, equation.deri);
    euler.update(xs, y0, h, exact.exac, equation.deri);

    CInput.value = exact.cons;
    xs = exact.round(xs);
    drawFunctions(xs);
    drawErrors(xs);
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
                runge4.createDataset(runge4.appr),
                eulerP.createDataset(eulerP.appr),
                euler.createDataset(euler.appr),
                exact.createDataset(exact.exac),
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
                enable: false,
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
                runge4.createDataset(runge4.erro),
                eulerP.createDataset(eulerP.erro),
                euler.createDataset(euler.erro),
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
                enable: false,
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
function getXs(x0, h, N) {
    let x = [];

    for (let i = 0; i <= N; i++) {
        x.push(x0 + i * h);
    }

    return x;
}
