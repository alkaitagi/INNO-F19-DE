import v11 from "./equations/v11.js"
import exact from "./graphs/exact.js"
import euler from "./graphs/euler.js"
import eulerP from "./graphs/eulerP.js"
import runge2 from "./graphs/runge2.js"
import runge4 from "./graphs/runge4.js"

export function recalculate(x0, y0, X, N) {
    let canvas = document.querySelector("#graph canvas").getContext("2d");
    let h = (X - x0) / N;

    let xs = getXs(x0, h, N);

    if (window.chart && window.chart !== null) {
        window.chart.destroy();
    }
    window.chart = new Chart(canvas, {
        type: 'line',
        data: {
            labels: xs,
            datasets: [
                runge4.update(xs, y0, h, v11.f),
                eulerP.update(xs, y0, h, v11.f),
                euler.update(xs, y0, h, v11.f),
                new exact(v11).update(xs, y0)
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            tooltips: {
                mode: 'index',
                intersect: false,
            },
            hover: {
                mode: 'nearest',
                intersect: true
            },
            scales: {
                xAxes: [{
                    ticks: {
                        presicion: 3
                    }
                }],
                yAxes: [{
                    ticks: {
                        presicion: 3
                    }
                }],
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
