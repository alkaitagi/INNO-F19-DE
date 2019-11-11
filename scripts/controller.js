import v11 from "./equations/v11.js"
import exact from "./graphs/exact.js"
import euler from "./graphs/euler.js"
import eulerP from "./graphs/eulerP.js"
import runge2 from "./graphs/runge2.js"
import runge4 from "./graphs/runge4.js"

export function recalculate(x0, y0, X, N) {
    let h = (X - x0) / N;

    let xs = getXs(x0, h, N);

    if (window.chart && window.chart !== null) {
        window.chart.destroy();
    }
    window.chart = new Chart(window.canvas, {
        type: 'line',
        data: {
            labels: xs.map(x => x.toFixed(2)),
            datasets: [
                runge4.update(xs, y0, h, v11.deriv),
                eulerP.update(xs, y0, h, v11.deriv),
                euler.update(xs, y0, h, v11.deriv),
                exact.update(xs, y0, v11)
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
